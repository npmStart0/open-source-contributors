# Design — Open Source Contributors

## סקירה

אתר סטטי React + TypeScript שנבנה ב-Vite ומתארח ב-GitHub Pages. מקור הנתונים הוא
קובצי JSON בתיקיית `contributors/`. בזמן build, סקריפט Node.js מאמת כל קובץ מול
סכמת Zod משותפת ומפיק מודול TypeScript (`src/data/contributors.generated.ts`)
שהאפליקציה צורכת. כך הוספת תורם אינה דורשת שינוי בקוד React.

## ארכיטקטורה — שכבות

```
┌────────────────────────────────────────────────────────┐
│ contributors/*.json          (מקור נתונים, נערך ידנית)   │
└───────────────┬────────────────────────────────────────┘
                │  build-time
┌───────────────▼────────────────────────────────────────┐
│ scripts/build-contributors.ts                            │
│  - קורא קבצים, מאמת מול schema, בודק כפילויות             │
│  - מפיק src/data/contributors.generated.ts               │
└───────────────┬────────────────────────────────────────┘
                │  import
┌───────────────▼────────────────────────────────────────┐
│ services/contributorService  (גישה לנתונים generated)    │
└───────────────┬────────────────────────────────────────┘
                │
┌───────────────▼────────────────────────────────────────┐
│ utils/filterContributors  (חיפוש + סינון, טהור)          │
└───────────────┬────────────────────────────────────────┘
                │
┌───────────────▼────────────────────────────────────────┐
│ UI: pages (Home, Contribute) + components + i18n         │
└──────────────────────────────────────────────────────────┘
```

## מודל נתונים

### טיפוס Contributor (מקור — קובץ JSON)

```ts
interface ContributorInput {
  username: string;   // חובה; ^[a-z0-9-]+$ ; 1..39 תווים
  name: string;       // חובה; לא ריק; עד 80 תווים
  bio?: string;       // אופציונלי; עד 280 תווים
  skills?: string[];  // אופציונלי; עד 10 פריטים, ללא כפילויות
}
```

### טיפוס Contributor מועשר (בזמן build)

```ts
interface Contributor extends Required<Pick<ContributorInput, 'username' | 'name'>> {
  bio: string;              // ברירת מחדל: '' אם חסר
  skills: string[];         // ברירת מחדל: [] אם חסר
  profileUrl: string;       // `https://github.com/{username}`
}
```

> גרסה 1.0 אינה כוללת תמונות פרופיל/avatar.

### סכמת Zod משותפת (`src/types/contributorSchema.ts`)

- `username`: `z.string().regex(/^[a-z0-9-]+$/).min(1).max(39)`
- `name`: `z.string().trim().min(1).max(80)`
- `bio`: `z.string().max(280).optional()`
- `skills`: `z.array(z.string().min(1)).max(10).optional()` + בדיקת כפילויות (refine)
- `.strict()` — דחיית שדות שאינם בסכמה.

הסכמה משותפת בין סקריפט הבנייה לבדיקות ולולידציה.

## רכיבים (UI)

| רכיב | אחריות |
| --- | --- |
| `App` | ניתוב בין HomePage ל-ContributePage, הגדרת `dir`/`lang` גלובלי |
| `HomePage` | כותרת, חיפוש, מסנן, רשת, Empty State, קישורים, מחליף שפה |
| `ContributePage` | הוראות תרומה, דוגמת JSON, כללי ולידציה, troubleshooting |
| `ContributorGrid` | רשת רספונסיבית; מקבלת רשימת תורמים מסוננת |
| `ContributorCard` | הצגת תורם יחיד (שם, username, bio, skills); קישור GitHub |
| `SearchBar` | שדה חיפוש מבוקר; פולט שינוי query |
| `SkillsFilter` | בחירת טכנולוגיות; פולט selectedSkills |
| `EmptyState` | הודעה כשאין תוצאות |
| `LanguageSwitcher` | החלפת שפה he/en |

## שירותים ופונקציות עזר

### `services/contributorService.ts`
- `getAllContributors(): Contributor[]` — מחזיר את הנתונים מהמודול generated.
- `getAllSkills(): string[]` — אוסף טכנולוגיות ייחודיות לרשימת המסנן.

> אין שירות/שדה avatar. הכרטיס אינו מציג תמונה.

### `utils/filterContributors.ts` (פונקציה טהורה)

```ts
function filterContributors(
  contributors: Contributor[],
  query: string,
  selectedSkills: string[]
): Contributor[]
```

אלגוריתם:
1. נרמול `query`: `trim().toLowerCase()` + כיווץ רווחים.
2. התאמת חיפוש: `name` או `username` (lowercase) מכילים את ה-query המנורמל.
3. התאמת מסנן: אם `selectedSkills` לא ריק — לתורם יש לפחות טכנולוגיה אחת מהנבחרות (OR).
4. תוצאה = חיפוש AND מסנן.
5. query ריק ⇒ עובר את שלב החיפוש; selectedSkills ריק ⇒ עובר את שלב המסנן.
6. מחזיר מערך חדש (`filter`), ללא שינוי הקלט.

## לוקליזציה (i18n)

- `src/i18n/he.ts`, `src/i18n/en.ts` — מילוני מפתח→טקסט.
- `src/i18n/index.ts` — טיפוס `TranslationKey`, context/hook `useTranslation()` שמחזיר `t(key)` ואת השפה הנוכחית.
- החלפת שפה מעדכנת state + `document.documentElement.dir`/`lang`.
- ברירת מחדל: עברית (RTL). טקסט תורם לא עובר תרגום.

## זרימת מידע (Home)

1. `HomePage` טוען `getAllContributors()` ו-`getAllSkills()` פעם אחת.
2. State מקומי: `query`, `selectedSkills`.
3. בכל render מחושב `filterContributors(all, query, selectedSkills)`.
4. אם התוצאה ריקה → `EmptyState`, אחרת `ContributorGrid`.

## אבטחה

- אין `dangerouslySetInnerHTML`. כל טקסט התורם מרונדר כ-text node.
- כתובות GitHub נבנות מ-username מאומת (regex), כך שאין הזרקת URL.
- אין סודות בקוד; פריסה עם הרשאות מינימליות.

## build ו-deploy

- `vite.config.ts`: `base` = `/{repo-name}/` לצורך GitHub Pages (ניתן לקבוע משתנה סביבה).
- סדר build: `generate:contributors` → `vite build`.
- `validate.yml`: lint + validate + test + build על כל PR.
- `deploy.yml`: רק על `main`, הרשאות `pages: write`, `id-token: write`, מפריד מהבדיקות.

## החלטות פתוחות / Trade-offs

1. **ניתוב:** נעדיף ניתוב מינימלי (state פנימי או `react-router`). המלצה: `react-router-dom` עבור שני דפים — תלות קטנה ומוצדקת. לאישור.
2. **פורמט מודול generated:** TypeScript (`.generated.ts`) עם `import` סטטי מעדיף בטיחות טיפוסים על פני טעינת JSON בזמן ריצה.
3. **ללא תמונות פרופיל:** לפי החלטת המוצר, גרסה 1.0 אינה כוללת avatar כלל.
4. **Zod כתלות:** מוצדקת — סכמה משותפת בין build לבדיקות; מתועד ב-tech.md.

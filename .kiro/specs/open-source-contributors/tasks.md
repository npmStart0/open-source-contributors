# Tasks — Open Source Contributors

משימות מימוש מסודרות לפי אבני דרך. כל משימה עצמאית ככל האפשר, כוללת בדיקות
ותנאי קבלה, ומפנה לדרישות הרלוונטיות ב-requirements.md.

---

## Milestone 1 — Foundation

- [ ] 1.1 אתחול פרויקט Vite + React + TypeScript
  - יצירת `package.json`, `tsconfig.json`, `vite.config.ts`, `index.html`, `src/main.tsx`, `src/App.tsx`.
  - הגדרת `base` ב-Vite עבור GitHub Pages.
  - _תנאי קבלה:_ `npm run dev` ו-`npm run build` רצים. _דרישות: 9, 10._

- [ ] 1.2 הגדרת ESLint, Vitest ו-React Testing Library
  - קונפיג ESLint, Vitest (jsdom), setup RTL.
  - סקריפטים ב-package.json: `lint`, `test`.
  - _תנאי קבלה:_ `npm run lint` ו-`npm run test -- --run` רצים (בדיקת sanity עוברת). _דרישות: כל הלא-פונקציונליות._

- [ ] 1.3 מודל `Contributor` וסכמת Zod משותפת
  - `src/types/contributor.ts`, `src/types/contributorSchema.ts`.
  - בדיקות schema: שדות חובה, אורכים, regex ל-username, כפילויות skills, `.strict()`.
  - _תנאי קבלה:_ בדיקות schema עוברות. _דרישות: 8._

- [ ] 1.4 קובצי Steering של Kiro
  - כבר נוצרו ב-`.kiro/steering/`. אימות תקינות ועדכון אם צריך.
  - _דרישות: כל המסמך._

- [ ] 1.5 README, LICENSE ו-CONTRIBUTING בסיסיים
  - תיאור פרויקט, הרצה מקומית, רישיון (MIT), מדריך תרומה ראשוני.
  - _תנאי קבלה:_ הקבצים קיימים וקריאים. _דרישות: 6._

---

## Milestone 2 — User Interface

- [ ] 2.1 `ContributorCard`
  - הצגת שם, username, bio, skills, קישור GitHub (ללא תמונת פרופיל).
  - בדיקות: רינדור שדות, href נכון לפרופיל GitHub.
  - _דרישות: 1._

- [ ] 2.2 `ContributorGrid` רספונסיבי
  - רשת שמקבלת רשימה; CSS Grid רספונסיבי.
  - בדיקה: רינדור N כרטיסים.
  - _דרישות: 1, לא-פונקציונלי רספונסיביות._

- [ ] 2.3 `filterContributors` + `SearchBar`
  - פונקציה טהורה + רכיב חיפוש מבוקר.
  - בדיקות יחידה: התאמה חלקית, case-insensitive, query ריק, אי-שינוי קלט.
  - _דרישות: 2, 4._

- [ ] 2.4 `SkillsFilter` + שילוב סינון
  - בחירת טכנולוגיות; OR בין טכנולוגיות, AND עם חיפוש; ניקוי.
  - בדיקות יחידה לכללי הסינון המשולבים.
  - _דרישות: 3, 4._

- [ ] 2.5 `EmptyState` ושילוב ב-HomePage
  - הצגת הודעה כשאין תוצאות; חיווט חיפוש+סינון+רשת.
  - בדיקת אינטגרציה: הקלדת חיפוש ללא התאמות → Empty State.
  - _דרישות: 5._

- [ ] 2.6 עיצוב רספונסיבי וסגנונות בסיס
  - `src/styles/`; תמיכה בנייד/טאבלט/דסקטופ; focus states ונגישות.
  - _דרישות: לא-פונקציונלי נגישות ורספונסיביות._

---

## Milestone 3 — Contribution Pipeline

- [ ] 3.1 סקריפט `scripts/build-contributors.ts`
  - קריאת `contributors/*.json`, פענוח מול schema, הפקת `src/data/contributors.generated.ts`.
  - חישוב `profileUrl` מ-username מאומת.
  - _תנאי קבלה:_ הרצה מפיקה מודול תקין; קלט לא תקין מכשיל בכישלון מפורש. _דרישות: 8, 9._

- [ ] 3.2 ולידציה וכפילות username
  - פקודת `validate:contributors`; בדיקת התאמת שם קובץ ל-username; כפילויות ללא תלות ברישיות.
  - בדיקות מול fixtures תקינים ולא תקינים ב-`tests/fixtures/`.
  - _דרישות: 8._

- [ ] 3.3 GitHub Actions לבדיקות PR (`.github/workflows/validate.yml`)
  - `npm ci`, `lint`, `validate:contributors`, `test -- --run`, `build`.
  - _דרישות: 10._

- [ ] 3.4 תבנית Pull Request והוראות תרומה (ContributePage)
  - `PULL_REQUEST_TEMPLATE.md`, `ISSUE_TEMPLATE/`, תוכן `ContributePage`.
  - בדיקה: ContributePage מרנדרת דוגמת JSON וכללי ולידציה.
  - _דרישות: 6._

- [ ] 3.5 בדיקות יחידה ואינטגרציה (`tests/integration/`)
  - זרימה מלאה: טעינת נתונים → חיפוש/סינון → תצוגה.
  - _דרישות: 1-5, 9._

---

## Milestone 4 — Localization & Release

- [ ] 4.1 תרגומים he/en (`src/i18n/`)
  - מילונים מרכזיים, `useTranslation`, אין טקסט קשיח ברכיבים.
  - בדיקה: מפתח מתורגם נכון בשתי השפות.
  - _דרישות: 7._

- [ ] 4.2 RTL/LTR לפי שפה + `LanguageSwitcher`
  - עדכון `document.documentElement.dir`/`lang`; החלפה he↔en.
  - בדיקה: בחירת עברית ⇒ rtl/he, אנגלית ⇒ ltr/en.
  - _דרישות: 7._

- [ ] 4.3 Vite base path ו-GitHub Pages
  - קביעת `base` לשם המאגר; אימות build מפיק נתיבים נכונים.
  - _דרישות: 10._

- [ ] 4.4 workflow פריסה אוטומטית (`.github/workflows/deploy.yml`)
  - רק על `main`; הרשאות מינימליות (`pages: write`, `id-token: write`); פעולות מקובעות.
  - _דרישות: 10._

- [ ] 4.5 בדיקת תרומה ראשונה מקצה לקצה
  - הוספת תורם לדוגמה, ולידציה, build, אימות הופעה ברשת.
  - _תנאי קבלה:_ כל קריטריוני הקבלה לגרסה 1.0 מתקיימים. _דרישות: הגדרת הצלחה._

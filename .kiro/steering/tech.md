# Tech — Stack and Tooling

## טכנולוגיות ליבה

- **React** (פונקציונלי, Hooks בלבד).
- **TypeScript** עם `strict` מופעל.
- **Vite** ככלי build ו-dev server.
- **Vitest** + **React Testing Library** לבדיקות.
- **ESLint** ל-linting.
- **GitHub Actions** ל-CI ולפריסה.
- **GitHub Pages** לאירוח.

## תלויות נוספות

- מותר להוסיף תלות רק כשהיא מוצדקת, ויש לתעד את ההחלטה.
- מועדפת ולידציה עם **Zod** — סכמה אחת משותפת בין סקריפט הבנייה לבדיקות.
- אין להוסיף ספרייה חדשה כשניתן לפתור את הבעיה בכלים הקיימים.

## אילוצים

- אין Backend, מסד נתונים, Authentication או OAuth.
- אין סודות (secrets) בקוד הפרונטאנד.
- מקור הנתונים: קובצי JSON בתיקיית `contributors/`.
- מודול הנתונים נוצר בזמן build ואין לערוך אותו ידנית.

## פקודות npm מרכזיות

```
npm run dev                  # הרצת dev server
npm run build                # יצירת נתונים + build production
npm run preview              # תצוגה מקדימה של build
npm run lint                 # ESLint
npm run test                 # Vitest (watch)
npm run test -- --run        # הרצה בודדת (CI)
npm run validate:contributors# ולידציית קובצי התורמים
npm run generate:contributors# יצירת מודול הנתונים מקובצי JSON
```

## כללי טיפוסים

- טיפוסים מפורשים לממשקים ציבוריים.
- `unknown` במקום `any` בטיפול בקלט לא מהימן.
- הימנעות מ-`as` ללא הצדקה; עדיפות ל-type guards ו-schema parsing.

# Structure — Project Layout and Responsibilities

## מבנה התיקיות

```
open-source-contributors/
├── .github/
│   ├── workflows/
│   │   ├── validate.yml
│   │   └── deploy.yml
│   ├── ISSUE_TEMPLATE/
│   └── PULL_REQUEST_TEMPLATE.md
├── .kiro/
│   ├── steering/
│   ├── specs/
│   └── hooks/
├── contributors/            # קובצי JSON של תורמים: {username}.json
├── scripts/
│   └── build-contributors.ts
├── src/
│   ├── components/          # רכיבי תצוגה (ContributorCard, Grid, Search, ...)
│   ├── pages/               # HomePage, ContributePage
│   ├── data/                # מודול נתונים שנוצר (generated) — אין לערוך ידנית
│   ├── i18n/                # מילוני תרגום he/en + hook
│   ├── services/            # שכבת גישה לנתונים
│   ├── types/               # טיפוסים משותפים (Contributor ועוד)
│   ├── utils/               # פונקציות עזר טהורות (filterContributors ועוד)
│   ├── styles/
│   ├── App.tsx
│   └── main.tsx
├── tests/
│   ├── fixtures/
│   └── integration/
├── CONTRIBUTING.md
├── CODE_OF_CONDUCT.md
├── LICENSE
├── README.md
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## הפרדת אחריות

- **components/** — תצוגה בלבד, ללא לוגיקת נתונים כבדה.
- **utils/** — פונקציות טהורות ללא תופעות לוואי (ניתנות לבדיקה בקלות).
- **services/** — גישה לנתונים שנוצרו בזמן build.
- **i18n/** — כל הטקסטים של הממשק במילונים מרכזיים, לא קשיח בתוך רכיבים.
- **types/** — טיפוסים ו-schema משותפים.
- **scripts/** — בנייה וולידציה בזמן build.

## כללי שמות

- קובץ תורם: `contributors/{username}.json` — שם הקובץ חייב להתאים לשדה `username`.
- רכיבי React: `PascalCase.tsx`.
- utils ו-services: `camelCase.ts`.
- קבצי בדיקה: `*.test.ts` / `*.test.tsx` ליד הקוד, או ב-`tests/` לאינטגרציה.

## כללי עריכה

- אין לערוך קובץ נתונים generated ידנית — הוא נוצר מחדש בכל build.
- אין לשנות קובצי תורמים קיימים כשהמשימה היא הוספת פרופיל חדש.

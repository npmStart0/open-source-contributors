# Testing and Deployment

## בדיקות נדרשות

- בדיקות יחידה ל-`filterContributors` (חיפוש + סינון).
- בדיקות ל-`ContributorCard` ולקישורי GitHub.
- בדיקות ולידציה לקובצי JSON (schema, כפילויות, התאמת שם קובץ).
- בדיקות דו-לשוניות וכיווניות (RTL/LTR).
- בדיקות למצב Empty State.
- בדיקת build מלא.

## הרצת בדיקות

- ב-CI: `npm run test -- --run` (ללא watch).
- מקומית אפשר watch, אך אין להשאיר תהליכים ארוכים רצים בצ'אט.

## תהליך CI (לכל Pull Request)

```
npm ci
npm run lint
npm run validate:contributors
npm run test -- --run
npm run build
```

PR עם נתונים לא תקינים או build שנכשל אינו מוכן למיזוג. יש להגן על `main`
בכללי המאגר ולדרוש מעבר של בדיקות CI.

## תהליך Deployment

1. מיזוג מאושר ל-`main`.
2. התקנת תלויות (`npm ci`).
3. יצירת מערך הנתונים מקובצי המקור.
4. הרצת בדיקות ובניית production.
5. העלאת תוצר הבנייה.
6. פרסום ב-GitHub Pages.

## כללי אבטחה לפריסה

- workflow נפרד לבדיקות (`validate.yml`) ולפריסה (`deploy.yml`).
- הרשאות מינימליות ל-workflow הפריסה (`permissions` מצומצם).
- PRs מתורמים חיצוניים לא מקבלים credentials לפריסה.
- פעולות GitHub חיצוניות מקובעות לגרסה (pinned).

## כלל עליון

אין לטעון שבדיקות, build או deploy הצליחו אלא אם הורצו ואומתו בפועל.

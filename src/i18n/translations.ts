/** Centralized UI translation dictionaries for Hebrew and English. */

export const LANGUAGES = ['he', 'en'] as const;
export type Language = (typeof LANGUAGES)[number];

export const en = {
  'app.title': 'Open Source Contributors',
  'app.subtitle':
    'A community directory of open-source contributors and their skills.',
  'nav.home': 'Home',
  'nav.contribute': 'How to Contribute',
  'home.join': 'Join the Community',
  'home.searchLabel': 'Search by name or GitHub username',
  'home.searchPlaceholder': 'Search contributors…',
  'home.skillsLabel': 'Filter by skills',
  'home.clearFilters': 'Clear filters',
  'home.resultsCount': '{count} contributor(s)',
  'empty.title': 'No contributors found',
  'empty.description': 'Try a different search term or clear the filters.',
  'card.skills': 'Skills',
  'card.viewProfile': 'View GitHub profile',
  'language.switch': 'Language',
  'language.he': 'עברית',
  'language.en': 'English',
  'contribute.title': 'How to Contribute',
  'contribute.intro':
    'Add your profile by opening a pull request with a single JSON file. No React code changes are needed.',
  'contribute.workflowTitle': 'Workflow',
  'contribute.schemaTitle': 'Profile schema',
  'contribute.rulesTitle': 'Validation rules',
  'contribute.troubleshootingTitle': 'Troubleshooting',
  'contribute.links': 'Useful links',
  'contribute.readme': 'README',
  'contribute.contributing': 'CONTRIBUTING guide',
  'contribute.repo': 'GitHub repository',
  'contribute.backHome': 'Back to directory',
} as const;

export type TranslationKey = keyof typeof en;

export const he: Record<TranslationKey, string> = {
  'app.title': 'תורמי קוד פתוח',
  'app.subtitle': 'ספריית קהילה של תורמי קוד פתוח והטכנולוגיות שלהם.',
  'nav.home': 'דף הבית',
  'nav.contribute': 'איך לתרום',
  'home.join': 'הצטרפו לקהילה',
  'home.searchLabel': 'חיפוש לפי שם או שם משתמש ב-GitHub',
  'home.searchPlaceholder': 'חיפוש תורמים…',
  'home.skillsLabel': 'סינון לפי טכנולוגיות',
  'home.clearFilters': 'ניקוי מסננים',
  'home.resultsCount': '{count} תורמים',
  'empty.title': 'לא נמצאו תורמים',
  'empty.description': 'נסו מונח חיפוש אחר או נקו את המסננים.',
  'card.skills': 'טכנולוגיות',
  'card.viewProfile': 'צפייה בפרופיל GitHub',
  'language.switch': 'שפה',
  'language.he': 'עברית',
  'language.en': 'English',
  'contribute.title': 'איך לתרום',
  'contribute.intro':
    'הוסיפו את הפרופיל שלכם באמצעות פתיחת Pull Request עם קובץ JSON יחיד. אין צורך בשינוי קוד React.',
  'contribute.workflowTitle': 'תהליך התרומה',
  'contribute.schemaTitle': 'מבנה הפרופיל',
  'contribute.rulesTitle': 'כללי ולידציה',
  'contribute.troubleshootingTitle': 'פתרון תקלות',
  'contribute.links': 'קישורים שימושיים',
  'contribute.readme': 'README',
  'contribute.contributing': 'מדריך CONTRIBUTING',
  'contribute.repo': 'מאגר GitHub',
  'contribute.backHome': 'חזרה לספרייה',
};

export const dictionaries: Record<Language, Record<TranslationKey, string>> = {
  he,
  en,
};

export const languageDirection: Record<Language, 'rtl' | 'ltr'> = {
  he: 'rtl',
  en: 'ltr',
};

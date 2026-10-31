/** Centralized UI translation dictionaries for Hebrew and English. */

export const LANGUAGES = ['he', 'en'] as const;
export type Language = (typeof LANGUAGES)[number];

export const en = {
  'app.title': 'Open Source. People. Community.',
  'app.subtitle':
    'Discover developers, explore technologies, and connect with the open-source community.',
  'app.logoAlt': 'npmStart logo',
  'nav.label': 'Primary',
  'nav.home': 'Home',
  'nav.contribute': 'How to Contribute',
  'home.join': 'Add your profile',
  'home.heroTitle': 'Open Source. People. Community.',
  'home.heroSubtitle':
    'Discover the next-generation developers and the technologies they build with. Browse the community, or add your own profile.',
  'home.viewContributors': 'Meet the community',
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
  'contribute.title': 'Your First Contribution, Step by Step',
  'contribute.intro':
    'This is a complete guide for people who have never used GitHub. You will go from creating an account all the way to submitting your first contribution — using only the GitHub website. No software to install.',
  'contribute.noInstall':
    'You do not need to install Git, GitHub Desktop, or any editor. Everything here is done in your web browser.',
  'contribute.openRepo': 'Open the repository on GitHub',

  // --- Stepper chrome ---
  'contribute.progressLabel': 'Tutorial progress',
  'contribute.progressStatus': 'Step {current} of {total}',
  'contribute.stepLabel': 'Step {current} of {total}',
  'contribute.required': 'Required',
  'contribute.optional': 'Optional',
  'contribute.prev': 'Previous',
  'contribute.next': 'Next',
  'contribute.stepsNavLabel': 'Tutorial steps',
  'contribute.goToStep': 'Go to step {current}: {title}',

  // --- Step 1: account ---
  'contribute.s1.title': 'Create a GitHub account',
  'contribute.s1.what':
    'GitHub is a website where developers store and share code. A free account lets you contribute to projects like this one. If you already have an account, sign in and skip to the next step.',
  'contribute.s1.i1': 'Open the GitHub sign-up page (link below).',
  'contribute.s1.i2':
    'Enter your email address, then choose a password and a username. Your username is your public identity on GitHub (for example "israel-dev"). Pick something you are happy to share.',
  'contribute.s1.i3':
    'GitHub sends a verification code to your email. Open your inbox, copy the code, and paste it to confirm your email.',
  'contribute.s1.i4': 'Once verified, your account is ready and you are signed in.',
  'contribute.s1.cta': 'Open GitHub sign-up',
  'contribute.s1.tip':
    'Tip: your username becomes part of the file you add later, so choose it carefully.',

  // --- Step 2: fork ---
  'contribute.s2.title': 'Fork the project',
  'contribute.s2.what':
    'A repository (or "repo") is a project folder stored on GitHub. A Fork is your own personal copy of that repo. You make changes in your copy first — the original project is never touched until a maintainer accepts your changes.',
  'contribute.s2.i1': 'Open the original project repository (button below).',
  'contribute.s2.i2':
    'Find the Fork button near the top-right of the page and click it.',
  'contribute.s2.i3': 'Make sure the owner is set to your own GitHub account.',
  'contribute.s2.i4': 'Click Create fork and wait a few seconds.',
  'contribute.s2.i5':
    'You now have a personal copy. Check the name at the top of the page: it should read "your-username / open-source-contributors".',
  'contribute.s2.note':
    'Changes in your fork do not affect the original project. You are working safely in your own copy.',

  // --- Step 3: add profile ---
  'contribute.s3.title': 'Add your contributor profile',
  'contribute.s3.what':
    'A file is a single document. A JSON file is a plain-text file that stores data in a simple, structured format that computers can read. You will add one small JSON file describing yourself.',
  'contribute.s3.i1': 'Open your fork (the copy under your username).',
  'contribute.s3.i2': 'Click the "contributors" folder to open it.',
  'contribute.s3.i3': 'Click the Add file button, then choose Create new file.',
  'contribute.s3.i4':
    'In the filename box, type your-username.json — the filename must exactly match the username inside the file. For example, israel-dev.json contains the username "israel-dev".',
  'contribute.s3.i5':
    'Paste the example below into the file area and change the values to your own.',
  'contribute.s3.i6':
    'Use the Preview tab above the editor to review your file before saving.',
  'contribute.s3.exampleTitle': 'Copy this example',
  'contribute.s3.fieldsTitle': 'What each line means',
  'contribute.s3.fUsername':
    'username — your GitHub username. Letters, digits and hyphens, up to 39 characters. This must match the file name.',
  'contribute.s3.fName': 'name — your display name. Required, up to 80 characters.',
  'contribute.s3.fBio':
    'bio — one short sentence about you. Optional, up to 280 characters.',
  'contribute.s3.fSkills':
    'skills — a list of technologies you know. Optional, up to 10 items, no repeats.',
  'contribute.s3.syntaxTitle': 'JSON syntax, in plain words',
  'contribute.s3.syn1':
    'Every name and text value is wrapped in double quotes: "like this".',
  'contribute.s3.syn2':
    'A colon separates a name from its value: "name": "Israel Israeli".',
  'contribute.s3.syn3':
    'A comma separates one line from the next — but the last line before a closing bracket has no comma.',
  'contribute.s3.syn4':
    'Curly braces { } wrap the whole object. Square brackets [ ] wrap the list of skills.',
  'contribute.s3.syn5':
    'If something looks off, the Preview tab and the automated check (Step 6) will point you to the problem.',

  // --- Step 4: commit ---
  'contribute.s4.title': 'Save your changes (Commit)',
  'contribute.s4.what':
    'A Commit is a saved snapshot of your change, with a short message describing what you did. A branch is a separate line of work, so your change stays isolated until it is reviewed.',
  'contribute.s4.i1': 'At the bottom of the page, click Commit changes.',
  'contribute.s4.i2':
    'Write a short, meaningful message such as "Add my contributor profile". This message tells others what the change does.',
  'contribute.s4.i3':
    'Choose "Create a new branch for this commit and start a pull request".',
  'contribute.s4.i4': 'Name the branch something clear, for example add-my-profile.',
  'contribute.s4.i5': 'Click Propose changes.',
  'contribute.s4.why':
    'Why a new branch? It keeps the main project untouched while your change is reviewed, and it lets you make follow-up fixes without disturbing anyone else.',

  // --- Step 5: pull request ---
  'contribute.s5.title': 'Create a Pull Request',
  'contribute.s5.what':
    'A Pull Request (PR) is a request to add the changes from your copy into the original project. It is how you ask the maintainer to include your new profile.',
  'contribute.s5.i1': 'Open the Pull requests tab, and click New pull request if needed.',
  'contribute.s5.i2': 'If asked, click "Compare across forks".',
  'contribute.s5.i3': 'Base repository: npmStart0/open-source-contributors.',
  'contribute.s5.i4': 'Base branch: main.',
  'contribute.s5.i5': 'Head repository: your fork.',
  'contribute.s5.i6': 'Compare branch: the branch you created (for example add-my-profile).',
  'contribute.s5.i7': 'Review the listed change — it should show only your new JSON file.',
  'contribute.s5.i8': 'Enter a title such as "Add my contributor profile".',
  'contribute.s5.i9': 'Add a short description, then click Create pull request.',
  'contribute.s5.diagramTitle': 'Base vs Compare',
  'contribute.s5.diagramBase': 'Base — the original project that receives the change',
  'contribute.s5.diagramCompare': 'Compare — your branch that holds the change',
  'contribute.s5.diagramArrow': 'your change flows into the project',

  // --- Step 6: validation ---
  'contribute.s6.title': 'Wait for validation and review',
  'contribute.s6.what':
    'GitHub Actions are automated checks that run on your Pull Request. For this project they confirm your JSON file is valid and follows the rules.',
  'contribute.s6.i1':
    'A yellow dot means the checks are still running. Give it a minute.',
  'contribute.s6.i2':
    'A green check mark means everything passed. A red X means something needs fixing.',
  'contribute.s6.i3':
    'If a check fails, click Details next to the red X to open the log and read the error message.',
  'contribute.s6.i4':
    'Fix the reported issue in your file — usually a JSON typo, a filename that does not match the username, or a username already in use.',
  'contribute.s6.i5':
    'Commit the fix to the same branch. Your Pull Request updates automatically — no need to open a new one.',
  'contribute.s6.note':
    'Opening a Pull Request does not mean it is accepted yet. The project maintainer reviews it and merges it when it is ready.',
  'contribute.s6.errUnit': 'What it usually means',
  'contribute.s6.err1': 'file is not valid JSON — check your quotes, commas and brackets.',
  'contribute.s6.err2':
    'filename must match username — rename the file so it matches the username field.',
  'contribute.s6.err3':
    'duplicate username — someone already used that username; use your own.',

  // --- Step 7: done ---
  'contribute.s7.title': 'Congratulations!',
  'contribute.s7.message':
    'You just submitted your first open-source contribution. Once the maintainer merges it, your profile will appear in the community directory. Thank you for contributing!',
  'contribute.s7.linkPr': 'View open Pull Requests',
  'contribute.s7.linkDir': 'Browse the contributor directory',
  'contribute.s7.linkHome': 'Go to the project homepage',

  // --- Optional: local Git ---
  'contribute.gitTitle': 'Optional: the advanced local Git workflow',
  'contribute.gitIntro':
    'Prefer working on your own computer with Git installed? This optional path does the same thing from the command line. Skip it if the website steps above worked for you.',
  'contribute.schemaTitle': 'Profile example',
  'contribute.links': 'Useful links',
  'contribute.readme': 'README',
  'contribute.contributing': 'CONTRIBUTING guide',
  'contribute.repo': 'GitHub repository',
  'contribute.backHome': 'Back to directory',
  'code.copy': 'Copy',
  'code.copied': 'Copied!',
  'footer.mentoring.title': 'Ready to level up your GitHub profile?',
  'footer.mentoring.description':
    'Learn Git and GitHub, build an impressive and professional GitHub profile, showcase your projects effectively, and develop your professional presence as a developer.',
  'footer.mentoring.cta': 'Get in touch',
  'footer.mentoring.ctaAria': 'Contact me by email about GitHub mentoring',
  'footer.mentoring.name': 'Dvora',
} as const;

export type TranslationKey = keyof typeof en;

export const he: Record<TranslationKey, string> = {
  'app.title': 'קוד פתוח. אנשים. קהילה.',
  'app.subtitle': 'מגלים מפתחים, מכירים טכנולוגיות ומתחברים לקהילת הקוד הפתוח.',
  'app.logoAlt': 'הלוגו של npmStart',
  'nav.label': 'ניווט ראשי',
  'nav.home': 'דף הבית',
  'nav.contribute': 'איך לתרום',
  'home.join': 'הוסיפו את הפרופיל שלכם',
  'home.heroTitle': 'קוד פתוח. אנשים. קהילה.',
  'home.heroSubtitle':
    'הכירו את המפתחים של דור העתיד ואת הטכנולוגיות שהם עובדים איתן. עיינו בקהילה, או הוסיפו את הפרופיל שלכם.',
  'home.viewContributors': 'הכירו את הקהילה',
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
  'contribute.title': 'התרומה הראשונה שלכם, שלב אחר שלב',
  'contribute.intro':
    'זהו מדריך מלא למי שמעולם לא השתמש ב-GitHub. תעברו מיצירת חשבון ועד שליחת התרומה הראשונה שלכם — באמצעות אתר GitHub בלבד. אין צורך להתקין שום תוכנה.',
  'contribute.noInstall':
    'אין צורך להתקין Git, GitHub Desktop או עורך קוד כלשהו. כל מה שכאן נעשה בדפדפן שלכם.',
  'contribute.openRepo': 'פתיחת המאגר ב-GitHub',

  // --- Stepper chrome ---
  'contribute.progressLabel': 'התקדמות במדריך',
  'contribute.progressStatus': 'שלב {current} מתוך {total}',
  'contribute.stepLabel': 'שלב {current} מתוך {total}',
  'contribute.required': 'חובה',
  'contribute.optional': 'אופציונלי',
  'contribute.prev': 'הקודם',
  'contribute.next': 'הבא',
  'contribute.stepsNavLabel': 'שלבי המדריך',
  'contribute.goToStep': 'מעבר לשלב {current}: {title}',

  // --- Step 1: account ---
  'contribute.s1.title': 'יצירת חשבון GitHub',
  'contribute.s1.what':
    'GitHub הוא אתר שבו מפתחים שומרים ומשתפים קוד. חשבון חינמי מאפשר לכם לתרום לפרויקטים כמו זה. אם כבר יש לכם חשבון, התחברו ועברו לשלב הבא.',
  'contribute.s1.i1': 'פתחו את עמוד ההרשמה של GitHub (קישור למטה).',
  'contribute.s1.i2':
    'הזינו כתובת דוא"ל, בחרו סיסמה ושם משתמש. שם המשתמש הוא הזהות הפומבית שלכם ב-GitHub (למשל "israel-dev"). בחרו שם שנוח לכם לשתף.',
  'contribute.s1.i3':
    'GitHub שולח קוד אימות לדוא"ל. פתחו את תיבת הדואר, העתיקו את הקוד והדביקו אותו כדי לאמת את הכתובת.',
  'contribute.s1.i4': 'לאחר האימות החשבון מוכן ואתם מחוברים.',
  'contribute.s1.cta': 'פתיחת עמוד ההרשמה של GitHub',
  'contribute.s1.tip':
    'טיפ: שם המשתמש יהפוך לחלק מהקובץ שתוסיפו בהמשך, אז בחרו אותו בקפידה.',

  // --- Step 2: fork ---
  'contribute.s2.title': 'יצירת Fork לפרויקט',
  'contribute.s2.what':
    'מאגר (repo) הוא תיקיית פרויקט ששמורה ב-GitHub.\nFork הוא עותק אישי משלכם של המאגר. אתם מבצעים שינויים בעותק שלכם קודם — הפרויקט המקורי לא משתנה עד שמנהל הפרויקט מאשר את השינויים.',
  'contribute.s2.i1': 'פתחו את המאגר המקורי של הפרויקט (כפתור למטה).',
  'contribute.s2.i2': 'אתרו את כפתור Fork בפינה הימנית-עליונה ולחצו עליו.',
  'contribute.s2.i3': 'ודאו שהבעלים (owner) מוגדר לחשבון ה-GitHub שלכם.',
  'contribute.s2.i4': 'לחצו Create fork והמתינו כמה שניות.',
  'contribute.s2.i5':
    'כעת יש לכם עותק אישי. בדקו את השם בראש העמוד: צריך להופיע "שם-המשתמש-שלכם / open-source-contributors".',
  'contribute.s2.note':
    'שינויים ב-Fork שלכם אינם משפיעים על הפרויקט המקורי. אתם עובדים בבטחה בעותק שלכם.',

  // --- Step 3: add profile ---
  'contribute.s3.title': 'הוספת פרופיל התורם שלכם',
  'contribute.s3.what':
    'קובץ הוא מסמך יחיד. קובץ JSON הוא קובץ טקסט פשוט ששומר נתונים במבנה מסודר שמחשבים יכולים לקרוא. תוסיפו קובץ JSON קטן אחד שמתאר אתכם.',
  'contribute.s3.i1': 'פתחו את ה-Fork שלכם (העותק תחת שם המשתמש שלכם).',
  'contribute.s3.i2': 'לחצו על התיקייה "contributors" כדי לפתוח אותה.',
  'contribute.s3.i3': 'לחצו על כפתור Add file ואז בחרו Create new file.',
  'contribute.s3.i4':
    'בתיבת שם הקובץ הקלידו your-username.json — שם הקובץ חייב להתאים בדיוק ל-username שבתוך הקובץ. למשל israel-dev.json מכיל את ה-username "israel-dev".',
  'contribute.s3.i5': 'הדביקו את הדוגמה שלמטה בשטח הקובץ ושנו את הערכים לשלכם.',
  'contribute.s3.i6':
    'השתמשו בלשונית Preview שמעל העורך כדי לסקור את הקובץ לפני השמירה.',
  'contribute.s3.exampleTitle': 'העתיקו את הדוגמה הזו',
  'contribute.s3.fieldsTitle': 'מה המשמעות של כל שורה',
  'contribute.s3.fUsername':
    'username — שם המשתמש שלכם ב-GitHub. אותיות, ספרות ומקפים, עד 39 תווים. חייב להתאים לשם הקובץ.',
  'contribute.s3.fName': 'name — השם לתצוגה. שדה חובה, עד 80 תווים.',
  'contribute.s3.fBio': 'bio — משפט קצר עליכם. אופציונלי, עד 280 תווים.',
  'contribute.s3.fSkills':
    'skills — רשימת טכנולוגיות שאתם מכירים. אופציונלי, עד 10 פריטים, ללא כפילויות.',
  'contribute.s3.syntaxTitle': 'תחביר JSON, במילים פשוטות',
  'contribute.s3.syn1': 'כל שם וכל ערך טקסט עטופים במירכאות כפולות: "כמו כאן".',
  'contribute.s3.syn2': 'נקודתיים מפרידות בין שם לערך שלו: "name": "Israel Israeli".',
  'contribute.s3.syn3':
    'פסיק מפריד בין שורה לשורה — אך בשורה האחרונה לפני סוגר סוגר אין פסיק.',
  'contribute.s3.syn4':
    'סוגריים מסולסלים { } עוטפים את כל האובייקט. סוגריים מרובעים [ ] עוטפים את רשימת ה-skills.',
  'contribute.s3.syn5':
    'אם משהו נראה לא תקין, לשונית Preview והבדיקה האוטומטית (שלב 6) יכוונו אתכם לבעיה.',

  // --- Step 4: commit ---
  'contribute.s4.title': 'שמירת השינויים (Commit)',
  'contribute.s4.what':
    'Commit הוא תמונת מצב שמורה של השינוי שלכם, עם הודעה קצרה שמתארת מה עשיתם. Branch (ענף) הוא קו עבודה נפרד, כך שהשינוי שלכם נשאר מבודד עד שהוא נסקר.',
  'contribute.s4.i1': 'בתחתית העמוד לחצו על Commit changes.',
  'contribute.s4.i2':
    'כתבו הודעה קצרה ומשמעותית כמו "Add my contributor profile". ההודעה מספרת לאחרים מה השינוי עושה.',
  'contribute.s4.i3':
    'בחרו באפשרות "Create a new branch for this commit and start a pull request".',
  'contribute.s4.i4': 'תנו לענף שם ברור, למשל add-my-profile.',
  'contribute.s4.i5': 'לחצו על Propose changes.',
  'contribute.s4.why':
    'למה ענף חדש? כך הפרויקט הראשי נשאר ללא שינוי בזמן שהשינוי שלכם נסקר, ואפשר לבצע תיקונים נוספים בלי להפריע לאף אחד.',

  // --- Step 5: pull request ---
  'contribute.s5.title': 'יצירת Pull Request',
  'contribute.s5.what':
    'Pull Request (ובקיצור PR) הוא בקשה להוסיף את השינויים מהעותק שלכם לפרויקט המקורי. כך אתם מבקשים ממנהל הפרויקט לכלול את הפרופיל החדש שלכם.',
  'contribute.s5.i1': 'פתחו את לשונית Pull requests, ולחצו New pull request אם צריך.',
  'contribute.s5.i2': 'אם תתבקשו, לחצו על "Compare across forks".',
  'contribute.s5.i3': 'Base repository: npmStart0/open-source-contributors.',
  'contribute.s5.i4': 'Base branch: main.',
  'contribute.s5.i5': 'Head repository: ה-Fork שלכם.',
  'contribute.s5.i6': 'Compare branch: הענף שיצרתם (למשל add-my-profile).',
  'contribute.s5.i7': 'סקרו את השינוי המוצג — צריך להופיע רק קובץ ה-JSON החדש שלכם.',
  'contribute.s5.i8': 'הזינו כותרת כמו "Add my contributor profile".',
  'contribute.s5.i9': 'הוסיפו תיאור קצר ולחצו Create pull request.',
  'contribute.s5.diagramTitle': 'Base מול Compare',
  'contribute.s5.diagramBase': 'Base — הפרויקט המקורי שמקבל את השינוי',
  'contribute.s5.diagramCompare': 'Compare — הענף שלכם שמחזיק את השינוי',
  'contribute.s5.diagramArrow': 'השינוי שלכם זורם אל הפרויקט',

  // --- Step 6: validation ---
  'contribute.s6.title': 'המתנה לבדיקה ולסקירה',
  'contribute.s6.what':
    'GitHub Actions הן בדיקות אוטומטיות שרצות על ה-Pull Request שלכם. בפרויקט הזה הן מוודאות שקובץ ה-JSON תקין ועומד בכללים.',
  'contribute.s6.i1': 'נקודה צהובה פירושה שהבדיקות עדיין רצות. תנו לזה דקה.',
  'contribute.s6.i2':
    'סימן וי ירוק פירושו שהכול עבר. איקס אדום פירושו שמשהו צריך תיקון.',
  'contribute.s6.i3':
    'אם בדיקה נכשלת, לחצו על Details ליד האיקס האדום כדי לפתוח את היומן ולקרוא את הודעת השגיאה.',
  'contribute.s6.i4':
    'תקנו את הבעיה המדווחת בקובץ — בדרך כלל טעות הקלדה ב-JSON, שם קובץ שלא תואם ל-username, או username שכבר בשימוש.',
  'contribute.s6.i5':
    'בצעו Commit לתיקון באותו ענף. ה-Pull Request מתעדכן אוטומטית — אין צורך לפתוח חדש.',
  'contribute.s6.note':
    'פתיחת Pull Request אינה אומרת שהוא כבר התקבל. מנהל הפרויקט סוקר אותו וממזג אותו כשהוא מוכן.',
  'contribute.s6.errUnit': 'מה זה אומר בדרך כלל',
  'contribute.s6.err1': 'file is not valid JSON — בדקו את המירכאות, הפסיקים והסוגריים.',
  'contribute.s6.err2':
    'filename must match username — שנו את שם הקובץ כך שיתאים לשדה username.',
  'contribute.s6.err3':
    'duplicate username — מישהו כבר השתמש ב-username הזה; השתמשו בשלכם.',

  // --- Step 7: done ---
  'contribute.s7.title': 'מזל טוב!',
  'contribute.s7.message':
    'הרגע שלחתם את התרומה הראשונה שלכם לקוד פתוח. לאחר שמנהל הפרויקט ימזג אותה, הפרופיל שלכם יופיע בספריית הקהילה. תודה שתרמתם!',
  'contribute.s7.linkPr': 'צפייה ב-Pull Requests פתוחים',
  'contribute.s7.linkDir': 'עיון בספריית התורמים',
  'contribute.s7.linkHome': 'מעבר לעמוד הבית של הפרויקט',

  // --- Optional: local Git ---
  'contribute.gitTitle': 'אופציונלי: תהליך העבודה המתקדם עם Git מקומי',
  'contribute.gitIntro':
    'מעדיפים לעבוד במחשב שלכם עם Git מותקן? המסלול האופציונלי הזה עושה את אותו הדבר משורת הפקודה. דלגו עליו אם שלבי האתר למעלה עבדו עבורכם.',
  'contribute.schemaTitle': 'דוגמת פרופיל',
  'contribute.links': 'קישורים שימושיים',
  'contribute.readme': 'README',
  'contribute.contributing': 'מדריך CONTRIBUTING',
  'contribute.repo': 'מאגר GitHub',
  'contribute.backHome': 'חזרה לספרייה',
  'code.copy': 'העתקה',
  'code.copied': 'הועתק!',
  'footer.mentoring.title': 'רוצה לשדרג את ה־GitHub שלך?',
  'footer.mentoring.description':
    'לומדים לעבוד עם Git ו־GitHub, לבנות פרופיל GitHub מרשים ומקצועי, להציג פרויקטים בצורה נכונה ולפתח נוכחות מקצועית כמפתחים.',
  'footer.mentoring.cta': 'לפרטים וליצירת קשר',
  'footer.mentoring.ctaAria': 'יצירת קשר בדוא"ל בנושא ליווי אישי ל-GitHub',
  'footer.mentoring.name': 'דבורה',
};

export const dictionaries: Record<Language, Record<TranslationKey, string>> = {
  he,
  en,
};

export const languageDirection: Record<Language, 'rtl' | 'ltr'> = {
  he: 'rtl',
  en: 'ltr',
};

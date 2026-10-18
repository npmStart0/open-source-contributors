import { useTranslation } from '../i18n';
import { LANGUAGES } from '../i18n/translations';

/** Switches the UI language between Hebrew and English. */
export function LanguageSwitcher() {
  const { language, setLanguage, t } = useTranslation();

  return (
    <div className="language-switcher" role="group" aria-label={t('language.switch')}>
      {LANGUAGES.map((lang) => (
        <button
          key={lang}
          type="button"
          className="language-switcher__button"
          aria-pressed={language === lang}
          data-active={language === lang}
          onClick={() => setLanguage(lang)}
        >
          {t(lang === 'he' ? 'language.he' : 'language.en')}
        </button>
      ))}
    </div>
  );
}

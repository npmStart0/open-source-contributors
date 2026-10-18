import { useId } from 'react';
import { useTranslation } from '../i18n';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

/** Controlled search input for name / username search. */
export function SearchBar({ value, onChange }: SearchBarProps) {
  const { t } = useTranslation();
  const inputId = useId();

  return (
    <div className="search-bar">
      <label htmlFor={inputId} className="visually-hidden">
        {t('home.searchLabel')}
      </label>
      <input
        id={inputId}
        type="search"
        className="search-bar__input"
        value={value}
        placeholder={t('home.searchPlaceholder')}
        onChange={(event) => onChange(event.target.value)}
        aria-label={t('home.searchLabel')}
      />
    </div>
  );
}

import { useTranslation } from '../i18n';

/** Shown when search / filtering returns no contributors. */
export function EmptyState() {
  const { t } = useTranslation();
  return (
    <div className="empty-state" role="status">
      <p className="empty-state__title">{t('empty.title')}</p>
      <p className="empty-state__description">{t('empty.description')}</p>
    </div>
  );
}

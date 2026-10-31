import { useTranslation } from '../i18n';

/** Contact email for the personal GitHub mentoring CTA. */
const CONTACT_EMAIL = 'd058321560@gmail.com';

/** Contact phone shown in the signature (name comes from translations). */
const CONTACT_PHONE = '0583212560';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="app-footer">
      <section className="app-footer__mentoring" aria-labelledby="footer-mentoring-title">
        <h2 id="footer-mentoring-title" className="app-footer__mentoring-title">
          {t('footer.mentoring.title')}
        </h2>
        <p className="app-footer__mentoring-text">
          {t('footer.mentoring.description')}
        </p>
        <a
          className="btn btn--primary app-footer__mentoring-cta"
          href={`mailto:${CONTACT_EMAIL}`}
          aria-label={`${t('footer.mentoring.ctaAria')} — ${t('footer.mentoring.name')} ${CONTACT_PHONE} ${CONTACT_EMAIL}`}
        >
          <span className="app-footer__mentoring-cta-label">
            {t('footer.mentoring.cta')}
          </span>
          <span className="app-footer__mentoring-cta-email" dir="ltr">
            {CONTACT_EMAIL}
          </span>
          <span className="app-footer__mentoring-cta-signature">
            {t('footer.mentoring.name')}{' '}
            <span dir="ltr">{CONTACT_PHONE}</span>
          </span>
        </a>
      </section>
    </footer>
  );
}

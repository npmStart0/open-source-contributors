import { BrowserRouter, Routes, Route, NavLink, Link } from 'react-router-dom';
import { I18nProvider, useTranslation } from './i18n';
import { LanguageSwitcher } from './components/LanguageSwitcher';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ContributePage } from './pages/ContributePage';

const BASE_PATH = import.meta.env.BASE_URL;
const LOGO_URL = `${BASE_PATH}logo.png`;

function Header() {
  const { t } = useTranslation();
  return (
    <header className="app-header">
      <Link className="app-header__brand" to="/" aria-label={t('app.title')}>
        <img
          className="app-header__logo"
          src={LOGO_URL}
          alt={t('app.logoAlt')}
          width={52}
          height={52}
        />
        <span className="app-header__brand-text">
          <span className="app-header__title">{t('app.title')}</span>
          <span className="app-header__subtitle">{t('app.subtitle')}</span>
        </span>
      </Link>
      <nav className="app-header__nav" aria-label={t('nav.label')}>
        <NavLink to="/" end>
          {t('nav.home')}
        </NavLink>
        <NavLink to="/contribute">{t('nav.contribute')}</NavLink>
      </nav>
      <LanguageSwitcher />
    </header>
  );
}

export default function App() {
  return (
    <I18nProvider>
      <BrowserRouter
        basename={BASE_PATH}
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <div className="app">
          <Header />
          <main className="app-main">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/contribute" element={<ContributePage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </I18nProvider>
  );
}

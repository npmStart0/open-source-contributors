import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { I18nProvider, useTranslation } from './i18n';
import { LanguageSwitcher } from './components/LanguageSwitcher';
import { HomePage } from './pages/HomePage';
import { ContributePage } from './pages/ContributePage';

const BASE_PATH = import.meta.env.BASE_URL;

function Header() {
  const { t } = useTranslation();
  return (
    <header className="app-header">
      <div className="app-header__brand">
        <h1 className="app-header__title">{t('app.title')}</h1>
        <p className="app-header__subtitle">{t('app.subtitle')}</p>
      </div>
      <nav className="app-header__nav" aria-label={t('nav.home')}>
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
        </div>
      </BrowserRouter>
    </I18nProvider>
  );
}

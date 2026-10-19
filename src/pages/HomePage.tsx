import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllContributors, getAllSkills } from '../services/contributorService';
import { filterContributors } from '../utils/filterContributors';
import { ContributorGrid } from '../components/ContributorGrid';
import { SearchBar } from '../components/SearchBar';
import { SkillsFilter } from '../components/SkillsFilter';
import { EmptyState } from '../components/EmptyState';
import { useTranslation } from '../i18n';

const BASE_PATH = import.meta.env.BASE_URL;
const LOGO_URL = `${BASE_PATH}logo.png`;

export function HomePage() {
  const { t } = useTranslation();
  const [query, setQuery] = useState('');
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const allContributors = useMemo(() => getAllContributors(), []);
  const allSkills = useMemo(() => getAllSkills(), []);

  const visible = useMemo(
    () => filterContributors(allContributors, query, selectedSkills),
    [allContributors, query, selectedSkills],
  );

  const toggleSkill = (skill: string) =>
    setSelectedSkills((current) =>
      current.includes(skill) ? current.filter((s) => s !== skill) : [...current, skill],
    );

  const clearSkills = () => setSelectedSkills([]);

  const benefits = [
    {
      icon: '🚀',
      title: t('home.benefit1Title'),
      text: t('home.benefit1Text'),
    },
    {
      icon: '📝',
      title: t('home.benefit2Title'),
      text: t('home.benefit2Text'),
    },
    {
      icon: '🤝',
      title: t('home.benefit3Title'),
      text: t('home.benefit3Text'),
    },
  ];

  return (
    <div className="home">
      <section className="hero" aria-labelledby="hero-title">
        <img
          className="hero__logo"
          src={LOGO_URL}
          alt={t('app.logoAlt')}
          width={120}
          height={120}
        />
        <h2 id="hero-title" className="hero__title">
          {t('home.heroTitle')}
        </h2>
        <p className="hero__subtitle">{t('home.heroSubtitle')}</p>
        <div className="hero__actions">
          <a className="btn btn--primary" href="#contributors">
            {t('home.viewContributors')}
          </a>
          <Link className="btn btn--secondary" to="/contribute">
            {t('home.join')}
          </Link>
        </div>
      </section>

      <section className="benefits" aria-label={t('home.benefitsTitle')}>
        {benefits.map((benefit) => (
          <article key={benefit.title} className="card benefit">
            <span className="benefit__icon" aria-hidden="true">
              {benefit.icon}
            </span>
            <h3 className="benefit__title">{benefit.title}</h3>
            <p className="benefit__text">{benefit.text}</p>
          </article>
        ))}
      </section>

      <section id="contributors" aria-label={t('app.title')}>
        <div className="home__controls">
          <SearchBar value={query} onChange={setQuery} />
          <Link className="btn btn--ghost" to="/contribute">
            {t('home.join')}
          </Link>
        </div>

        <SkillsFilter
          skills={allSkills}
          selected={selectedSkills}
          onToggle={toggleSkill}
          onClear={clearSkills}
        />

        <p className="home__count">{t('home.resultsCount', { count: visible.length })}</p>

        {visible.length === 0 ? <EmptyState /> : <ContributorGrid contributors={visible} />}
      </section>
    </div>
  );
}

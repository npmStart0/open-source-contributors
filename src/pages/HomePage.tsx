import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllContributors, getAllSkills } from '../services/contributorService';
import { filterContributors } from '../utils/filterContributors';
import { ContributorGrid } from '../components/ContributorGrid';
import { SearchBar } from '../components/SearchBar';
import { SkillsFilter } from '../components/SkillsFilter';
import { EmptyState } from '../components/EmptyState';
import { useTranslation } from '../i18n';

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

  return (
    <section className="home">
      <div className="home__controls">
        <SearchBar value={query} onChange={setQuery} />
        <Link className="home__join" to="/contribute">
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
  );
}

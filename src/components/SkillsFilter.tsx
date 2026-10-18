import { useTranslation } from '../i18n';

interface SkillsFilterProps {
  skills: string[];
  selected: string[];
  onToggle: (skill: string) => void;
  onClear: () => void;
}

/**
 * Renders a set of toggle buttons for the available skills.
 * Selecting several skills uses OR semantics (handled by the caller).
 */
export function SkillsFilter({ skills, selected, onToggle, onClear }: SkillsFilterProps) {
  const { t } = useTranslation();

  if (skills.length === 0) {
    return null;
  }

  return (
    <section className="skills-filter" aria-label={t('home.skillsLabel')}>
      <div className="skills-filter__header">
        <span className="skills-filter__title">{t('home.skillsLabel')}</span>
        {selected.length > 0 && (
          <button type="button" className="skills-filter__clear" onClick={onClear}>
            {t('home.clearFilters')}
          </button>
        )}
      </div>
      <ul className="skills-filter__list">
        {skills.map((skill) => {
          const isActive = selected.includes(skill);
          return (
            <li key={skill}>
              <button
                type="button"
                className="skills-filter__chip"
                aria-pressed={isActive}
                data-active={isActive}
                onClick={() => onToggle(skill)}
              >
                {skill}
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

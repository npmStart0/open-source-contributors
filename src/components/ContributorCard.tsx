import type { Contributor } from '../types/contributor';
import { useTranslation } from '../i18n';
import './ContributorCard.css';

interface ContributorCardProps {
  contributor: Contributor;
}

/**
 * Displays a single contributor: name, username, bio and skills, plus a link
 * to their public GitHub profile. No profile image is shown.
 * Contributor-provided text is rendered as plain text (no HTML injection).
 */
export function ContributorCard({ contributor }: ContributorCardProps) {
  const { t } = useTranslation();
  const { name, username, bio, skills, profileUrl } = contributor;
  const avatarUrl = `https://github.com/${username}.png?size=120`;

  return (
    <article className="contributor-card" aria-label={name}>
      <header className="contributor-card__header">
        <img
          className="contributor-card__avatar"
          src={avatarUrl}
          alt=""
          loading="lazy"
          width={56}
          height={56}
        />
        <div className="contributor-card__identity">
          <h3 className="contributor-card__name">{name}</h3>
          <span className="contributor-card__username">@{username}</span>
        </div>
      </header>

      {bio && <p className="contributor-card__bio">{bio}</p>}

      {skills.length > 0 && (
        <ul className="contributor-card__skills" aria-label={t('card.skills')}>
          {skills.map((skill) => (
            <li key={skill} className="contributor-card__skill">
              {skill}
            </li>
          ))}
        </ul>
      )}

      <a
        className="contributor-card__link"
        href={profileUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        {t('card.viewProfile')}
      </a>
    </article>
  );
}

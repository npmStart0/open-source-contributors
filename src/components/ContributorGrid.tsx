import type { Contributor } from '../types/contributor';
import { ContributorCard } from './ContributorCard';
import './ContributorGrid.css';

interface ContributorGridProps {
  contributors: Contributor[];
}

/** Responsive grid of contributor cards. */
export function ContributorGrid({ contributors }: ContributorGridProps) {
  return (
    <ul className="contributor-grid">
      {contributors.map((contributor) => (
        <li key={contributor.username} className="contributor-grid__item">
          <ContributorCard contributor={contributor} />
        </li>
      ))}
    </ul>
  );
}

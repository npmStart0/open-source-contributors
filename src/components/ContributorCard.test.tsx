import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../tests/testUtils';
import { ContributorCard } from './ContributorCard';
import type { Contributor } from '../types/contributor';

const contributor: Contributor = {
  username: 'israel-dev',
  name: 'Israel Israeli',
  bio: 'Frontend developer.',
  skills: ['React', 'TypeScript'],
  profileUrl: 'https://github.com/israel-dev',
};

describe('ContributorCard', () => {
  it('renders name, username, bio and skills', () => {
    renderWithProviders(<ContributorCard contributor={contributor} />);
    expect(screen.getByRole('heading', { name: 'Israel Israeli' })).toBeInTheDocument();
    expect(screen.getByText('@israel-dev')).toBeInTheDocument();
    expect(screen.getByText('Frontend developer.')).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
  });

  it('links to the GitHub profile with safe rel attributes', () => {
    renderWithProviders(<ContributorCard contributor={contributor} />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', 'https://github.com/israel-dev');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link.getAttribute('rel')).toContain('noopener');
  });

  it('omits bio and skills when not provided', () => {
    const minimal: Contributor = {
      username: 'min',
      name: 'Minimal',
      bio: '',
      skills: [],
      profileUrl: 'https://github.com/min',
    };
    renderWithProviders(<ContributorCard contributor={minimal} />);
    expect(screen.getByText('@min')).toBeInTheDocument();
    expect(screen.queryByText('React')).not.toBeInTheDocument();
  });
});

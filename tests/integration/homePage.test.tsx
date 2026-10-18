import { describe, it, expect, vi, beforeEach } from 'vitest';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from '../testUtils';
import type { Contributor } from '../../src/types/contributor';

const sample: Contributor[] = [
  {
    username: 'alice-dev',
    name: 'Alice Cohen',
    bio: 'React engineer.',
    skills: ['React', 'TypeScript'],
    profileUrl: 'https://github.com/alice-dev',
  },
  {
    username: 'bob-codes',
    name: 'Bob Levi',
    bio: 'Backend developer.',
    skills: ['Go'],
    profileUrl: 'https://github.com/bob-codes',
  },
];

vi.mock('../../src/services/contributorService', () => ({
  getAllContributors: () => sample,
  getAllSkills: () => ['Go', 'React', 'TypeScript'],
}));

// Import after the mock is registered.
const { HomePage } = await import('../../src/pages/HomePage');

describe('HomePage integration', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('renders all contributors initially', () => {
    renderWithProviders(<HomePage />);
    expect(screen.getByText('Alice Cohen')).toBeInTheDocument();
    expect(screen.getByText('Bob Levi')).toBeInTheDocument();
  });

  it('filters by search query', async () => {
    const user = userEvent.setup();
    renderWithProviders(<HomePage />);
    await user.type(screen.getByRole('searchbox'), 'alice');
    expect(screen.getByText('Alice Cohen')).toBeInTheDocument();
    expect(screen.queryByText('Bob Levi')).not.toBeInTheDocument();
  });

  it('filters by skill', async () => {
    const user = userEvent.setup();
    renderWithProviders(<HomePage />);
    await user.click(screen.getByRole('button', { name: 'Go', pressed: false }));
    expect(screen.getByText('Bob Levi')).toBeInTheDocument();
    expect(screen.queryByText('Alice Cohen')).not.toBeInTheDocument();
  });

  it('shows the empty state when nothing matches', async () => {
    const user = userEvent.setup();
    renderWithProviders(<HomePage />);
    await user.type(screen.getByRole('searchbox'), 'zzzzz');
    expect(screen.getByRole('status')).toBeInTheDocument();
  });
});

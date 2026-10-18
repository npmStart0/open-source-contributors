import { describe, it, expect } from 'vitest';
import { filterContributors } from './filterContributors';
import type { Contributor } from '../types/contributor';

function make(partial: Partial<Contributor> & Pick<Contributor, 'username' | 'name'>): Contributor {
  return {
    bio: '',
    skills: [],
    profileUrl: `https://github.com/${partial.username}`,
    ...partial,
  };
}

const alice = make({ username: 'alice-dev', name: 'Alice Cohen', skills: ['React', 'TypeScript'] });
const bob = make({ username: 'bob-codes', name: 'Bob Levi', skills: ['Vue', 'JavaScript'] });
const carol = make({ username: 'carol-x', name: 'Carol React', skills: ['React', 'Go'] });
const contributors = [alice, bob, carol];

describe('filterContributors', () => {
  it('returns all when query and skills are empty', () => {
    expect(filterContributors(contributors, '', [])).toEqual(contributors);
  });

  it('matches by name (partial, case-insensitive)', () => {
    expect(filterContributors(contributors, 'alice', [])).toEqual([alice]);
    expect(filterContributors(contributors, 'ALICE', [])).toEqual([alice]);
    expect(filterContributors(contributors, 'cohen', [])).toEqual([alice]); // matches name "Cohen"
  });

  it('matches by username (partial)', () => {
    expect(filterContributors(contributors, 'codes', [])).toEqual([bob]);
  });

  it('normalizes surrounding and inner whitespace in the query', () => {
    expect(filterContributors(contributors, '  alice   cohen ', [])).toEqual([alice]);
  });

  it('returns an empty array when nothing matches', () => {
    expect(filterContributors(contributors, 'zzz', [])).toEqual([]);
  });

  it('filters by a single skill', () => {
    expect(filterContributors(contributors, '', ['React'])).toEqual([alice, carol]);
  });

  it('uses OR between multiple selected skills', () => {
    expect(filterContributors(contributors, '', ['Vue', 'Go'])).toEqual([bob, carol]);
  });

  it('matches skills case-insensitively', () => {
    expect(filterContributors(contributors, '', ['react'])).toEqual([alice, carol]);
  });

  it('combines query AND skills', () => {
    // "React" in name OR username? none; but Carol has name "Carol React"
    expect(filterContributors(contributors, 'carol', ['React'])).toEqual([carol]);
    // Alice matches query but not skill Go -> excluded
    expect(filterContributors(contributors, 'alice', ['Go'])).toEqual([]);
  });

  it('does not mutate the input array', () => {
    const copy = [...contributors];
    filterContributors(contributors, 'alice', ['React']);
    expect(contributors).toEqual(copy);
  });
});

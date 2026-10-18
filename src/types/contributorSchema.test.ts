import { describe, it, expect } from 'vitest';
import {
  contributorSchema,
  parseContributor,
  buildProfileUrl,
  USERNAME_MAX_LENGTH,
  NAME_MAX_LENGTH,
  BIO_MAX_LENGTH,
} from './contributorSchema';

describe('contributorSchema', () => {
  const valid = {
    username: 'israel-dev',
    name: 'Israel Israeli',
    bio: 'Frontend developer.',
    skills: ['React', 'TypeScript'],
  };

  it('accepts a valid contributor', () => {
    expect(() => contributorSchema.parse(valid)).not.toThrow();
  });

  it('accepts a contributor with only required fields', () => {
    expect(() => contributorSchema.parse({ username: 'minimal', name: 'Min' })).not.toThrow();
  });

  it('rejects a missing username', () => {
    expect(() => contributorSchema.parse({ name: 'No User' })).toThrow();
  });

  it('rejects a missing name', () => {
    expect(() => contributorSchema.parse({ username: 'nouser' })).toThrow();
  });

  it('rejects an empty name', () => {
    expect(() => contributorSchema.parse({ username: 'x', name: '   ' })).toThrow();
  });

  it('rejects uppercase letters in username', () => {
    expect(() => contributorSchema.parse({ username: 'Israel', name: 'A' })).toThrow();
  });

  it('rejects invalid characters in username', () => {
    expect(() => contributorSchema.parse({ username: 'has_underscore', name: 'A' })).toThrow();
    expect(() => contributorSchema.parse({ username: 'has space', name: 'A' })).toThrow();
  });

  it('rejects a username longer than the limit', () => {
    const long = 'a'.repeat(USERNAME_MAX_LENGTH + 1);
    expect(() => contributorSchema.parse({ username: long, name: 'A' })).toThrow();
  });

  it('rejects a name longer than the limit', () => {
    const long = 'a'.repeat(NAME_MAX_LENGTH + 1);
    expect(() => contributorSchema.parse({ username: 'x', name: long })).toThrow();
  });

  it('rejects a bio longer than the limit', () => {
    const long = 'a'.repeat(BIO_MAX_LENGTH + 1);
    expect(() => contributorSchema.parse({ username: 'x', name: 'A', bio: long })).toThrow();
  });

  it('rejects more than the allowed number of skills', () => {
    const skills = Array.from({ length: 11 }, (_, i) => `skill${i}`);
    expect(() => contributorSchema.parse({ username: 'x', name: 'A', skills })).toThrow();
  });

  it('rejects duplicate skills (case-insensitive)', () => {
    expect(() =>
      contributorSchema.parse({ username: 'x', name: 'A', skills: ['React', 'react'] }),
    ).toThrow();
  });

  it('rejects unknown fields', () => {
    expect(() =>
      contributorSchema.parse({ username: 'x', name: 'A', website: 'http://evil' }),
    ).toThrow();
  });

  it('rejects a wrong type for skills', () => {
    expect(() => contributorSchema.parse({ username: 'x', name: 'A', skills: 'React' })).toThrow();
  });
});

describe('parseContributor', () => {
  it('enriches with defaults and a profile url', () => {
    const result = parseContributor({ username: 'israel-dev', name: 'Israel' });
    expect(result).toEqual({
      username: 'israel-dev',
      name: 'Israel',
      bio: '',
      skills: [],
      profileUrl: 'https://github.com/israel-dev',
    });
  });
});

describe('buildProfileUrl', () => {
  it('builds the GitHub profile url', () => {
    expect(buildProfileUrl('octocat')).toBe('https://github.com/octocat');
  });
});

import { describe, it, expect } from 'vitest';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { collectContributors } from './collectContributors';

const here = dirname(fileURLToPath(import.meta.url));
const fixtures = (name: string) => join(here, '..', 'tests', 'fixtures', name);

describe('collectContributors', () => {
  it('accepts valid files and enriches them', () => {
    const { contributors, errors } = collectContributors(fixtures('valid'));
    expect(errors).toEqual([]);
    expect(contributors.map((c) => c.username)).toEqual(['good-user', 'minimal']);
    const good = contributors.find((c) => c.username === 'good-user')!;
    expect(good.profileUrl).toBe('https://github.com/good-user');
    expect(good.skills).toEqual(['React', 'TypeScript']);
    const minimal = contributors.find((c) => c.username === 'minimal')!;
    expect(minimal.bio).toBe('');
    expect(minimal.skills).toEqual([]);
  });

  it('rejects a file whose name does not match the username', () => {
    const { contributors, errors } = collectContributors(fixtures('mismatch'));
    expect(contributors).toEqual([]);
    expect(errors).toHaveLength(1);
    expect(errors[0].message).toContain('filename must match username');
  });

  it('rejects unknown fields', () => {
    const { contributors, errors } = collectContributors(fixtures('invalid'));
    expect(contributors).toEqual([]);
    expect(errors).toHaveLength(1);
    expect(errors[0].file).toBe('extra-field.json');
  });

  it('rejects invalid JSON', () => {
    const { contributors, errors } = collectContributors(fixtures('broken'));
    expect(contributors).toEqual([]);
    expect(errors).toHaveLength(1);
    expect(errors[0].message).toContain('not valid JSON');
  });

  it('returns empty result for a missing directory', () => {
    const result = collectContributors(fixtures('does-not-exist'));
    expect(result.contributors).toEqual([]);
    expect(result.errors).toEqual([]);
  });
});

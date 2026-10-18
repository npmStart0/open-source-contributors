/**
 * Core validation logic shared by the build script and the tests.
 *
 * `collectContributors(dir)` reads every `*.json` file in `dir`, validates it
 * against the shared schema, enforces that the filename matches the username,
 * and rejects case-insensitive duplicate usernames.
 */
import { readdirSync, readFileSync } from 'node:fs';
import { join, basename } from 'node:path';
import { ZodError } from 'zod';
import { parseContributor } from '../src/types/contributorSchema';
import type { Contributor } from '../src/types/contributor';

export interface ValidationError {
  file: string;
  message: string;
}

export interface CollectResult {
  contributors: Contributor[];
  errors: ValidationError[];
}

function readJsonFileNames(dir: string): string[] {
  let entries: string[];
  try {
    entries = readdirSync(dir);
  } catch {
    // Directory does not exist yet: treat as an empty set.
    return [];
  }
  return entries.filter((name) => name.endsWith('.json')).sort();
}

export function collectContributors(dir: string): CollectResult {
  const files = readJsonFileNames(dir);
  const contributors: Contributor[] = [];
  const errors: ValidationError[] = [];
  const seenUsernames = new Map<string, string>();

  for (const file of files) {
    const fullPath = join(dir, file);
    const expectedUsername = basename(file, '.json');

    let raw: unknown;
    try {
      raw = JSON.parse(readFileSync(fullPath, 'utf-8'));
    } catch {
      errors.push({ file, message: 'file is not valid JSON' });
      continue;
    }

    let contributor: Contributor;
    try {
      contributor = parseContributor(raw);
    } catch (err) {
      const message =
        err instanceof ZodError
          ? err.issues.map((i) => `${i.path.join('.') || '(root)'}: ${i.message}`).join('; ')
          : String(err);
      errors.push({ file, message });
      continue;
    }

    if (contributor.username !== expectedUsername) {
      errors.push({
        file,
        message: `filename must match username: expected "${contributor.username}.json"`,
      });
      continue;
    }

    const key = contributor.username.toLowerCase();
    const existing = seenUsernames.get(key);
    if (existing) {
      errors.push({
        file,
        message: `duplicate username (case-insensitive) already used in "${existing}"`,
      });
      continue;
    }
    seenUsernames.set(key, file);

    contributors.push(contributor);
  }

  contributors.sort((a, b) => a.username.localeCompare(b.username));
  return { contributors, errors };
}

export function renderModule(contributors: Contributor[]): string {
  const body = JSON.stringify(contributors, null, 2);
  return `/**
 * AUTO-GENERATED FILE — DO NOT EDIT BY HAND.
 *
 * Produced by \`scripts/build-contributors.ts\` from the JSON files in
 * \`contributors/\`. Run \`npm run generate:contributors\` to regenerate.
 */
import type { Contributor } from '../types/contributor';

export const contributors: Contributor[] = ${body};
`;
}

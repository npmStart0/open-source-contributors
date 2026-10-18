import { contributors } from '../data/contributors.generated';
import type { Contributor } from '../types/contributor';

/** Returns all contributors generated at build time. */
export function getAllContributors(): Contributor[] {
  return contributors;
}

/**
 * Returns the sorted list of unique skills across all contributors,
 * for use in the skills filter.
 */
export function getAllSkills(): string[] {
  const seen = new Map<string, string>();
  for (const contributor of contributors) {
    for (const skill of contributor.skills) {
      const key = skill.toLowerCase();
      if (!seen.has(key)) {
        seen.set(key, skill);
      }
    }
  }
  return [...seen.values()].sort((a, b) => a.localeCompare(b));
}

import type { Contributor } from '../types/contributor';

/** Normalizes a string for case-insensitive, whitespace-tolerant comparison. */
function normalize(value: string): string {
  return value.trim().replace(/\s+/g, ' ').toLowerCase();
}

/**
 * Pure search + filter over contributors.
 *
 * Rules:
 * - Search: partial, case-insensitive match on name OR username.
 * - Skills: when any skills are selected, a contributor matches if it has at
 *   least one of them (OR between skills).
 * - Search AND skills are combined with AND.
 * - Empty query and empty selectedSkills return all contributors.
 * - The input array is never mutated; a new array is returned.
 */
export function filterContributors(
  contributors: Contributor[],
  query: string,
  selectedSkills: string[],
): Contributor[] {
  const normalizedQuery = normalize(query);
  const normalizedSkills = selectedSkills.map((skill) => skill.toLowerCase());

  return contributors.filter((contributor) => {
    const matchesQuery =
      normalizedQuery === '' ||
      normalize(contributor.name).includes(normalizedQuery) ||
      normalize(contributor.username).includes(normalizedQuery);

    const matchesSkills =
      normalizedSkills.length === 0 ||
      contributor.skills.some((skill) => normalizedSkills.includes(skill.toLowerCase()));

    return matchesQuery && matchesSkills;
  });
}

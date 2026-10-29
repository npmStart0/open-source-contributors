import { z } from 'zod';
import type { Contributor } from './contributor';

/**
 * Shared validation schema for contributor JSON files.
 *
 * Used by both the build-time generator (`scripts/build-contributors.ts`)
 * and the unit tests so the rules stay in a single place.
 */

export const USERNAME_MAX_LENGTH = 39;
export const NAME_MAX_LENGTH = 80;
export const BIO_MAX_LENGTH = 280;
export const SKILLS_MAX_COUNT = 10;

/** GitHub-compatible username: letters (any case), digits and hyphens. */
export const USERNAME_PATTERN = /^[A-Za-z0-9-]+$/;

export const contributorSchema = z
  .object({
    username: z
      .string()
      .min(1, 'username is required')
      .max(USERNAME_MAX_LENGTH, `username must be at most ${USERNAME_MAX_LENGTH} characters`)
      .regex(USERNAME_PATTERN, 'username may contain only letters, digits and hyphens'),
    name: z
      .string()
      .trim()
      .min(1, 'name is required')
      .max(NAME_MAX_LENGTH, `name must be at most ${NAME_MAX_LENGTH} characters`),
    bio: z
      .string()
      .trim()
      .max(BIO_MAX_LENGTH, `bio must be at most ${BIO_MAX_LENGTH} characters`)
      .optional(),
    skills: z
      .array(z.string().trim().min(1, 'skill must not be empty'))
      .max(SKILLS_MAX_COUNT, `skills must contain at most ${SKILLS_MAX_COUNT} items`)
      .optional()
      .refine(
        (skills) =>
          skills === undefined ||
          new Set(skills.map((s) => s.toLowerCase())).size === skills.length,
        { message: 'skills must not contain duplicates' },
      ),
  })
  // Reject any field that is not part of the schema.
  .strict();

export type ContributorSchemaInput = z.infer<typeof contributorSchema>;

/**
 * Builds the public GitHub profile URL from a validated username.
 * Safe because the username has already passed `USERNAME_PATTERN`.
 */
export function buildProfileUrl(username: string): string {
  return `https://github.com/${username}`;
}

/**
 * Validates raw, untrusted JSON data and returns an enriched Contributor.
 * Throws a ZodError when the data is invalid.
 */
export function parseContributor(data: unknown): Contributor {
  const parsed = contributorSchema.parse(data);
  return {
    username: parsed.username,
    name: parsed.name,
    bio: parsed.bio ?? '',
    skills: parsed.skills ?? [],
    profileUrl: buildProfileUrl(parsed.username),
  };
}

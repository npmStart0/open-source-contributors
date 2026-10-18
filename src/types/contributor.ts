/**
 * Shapes for contributor data.
 *
 * `ContributorInput` is the raw shape authored in `contributors/{username}.json`.
 * `Contributor` is the enriched shape produced at build time and consumed by the UI.
 */

export interface ContributorInput {
  username: string;
  name: string;
  bio?: string;
  skills?: string[];
}

export interface Contributor {
  username: string;
  name: string;
  bio: string;
  skills: string[];
  /** Public GitHub profile URL derived from the validated username. */
  profileUrl: string;
}

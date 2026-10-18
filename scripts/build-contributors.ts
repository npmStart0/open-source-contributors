/**
 * Build-time contributor data generator.
 *
 * Reads every `contributors/*.json` file, validates it against the shared
 * schema, enforces filename/username matching and uniqueness, then writes
 * `src/data/contributors.generated.ts`.
 *
 * Usage:
 *   tsx scripts/build-contributors.ts            # validate + generate
 *   tsx scripts/build-contributors.ts --check    # validate only (CI)
 *
 * Exits with a non-zero code on any validation error so the build fails loudly.
 */
import { writeFileSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { collectContributors, renderModule } from './collectContributors';

const scriptDir = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(scriptDir, '..');
const contributorsDir = join(projectRoot, 'contributors');
const outputFile = join(projectRoot, 'src', 'data', 'contributors.generated.ts');

function main(): void {
  const checkOnly = process.argv.includes('--check');
  const { contributors, errors } = collectContributors(contributorsDir);

  if (errors.length > 0) {
    console.error(`\nContributor validation failed with ${errors.length} error(s):\n`);
    for (const { file, message } of errors) {
      console.error(`  - ${file}: ${message}`);
    }
    process.exit(1);
  }

  if (checkOnly) {
    console.log(`Validated ${contributors.length} contributor file(s). OK.`);
    return;
  }

  writeFileSync(outputFile, renderModule(contributors), 'utf-8');
  console.log(`Generated ${outputFile} with ${contributors.length} contributor(s).`);
}

main();

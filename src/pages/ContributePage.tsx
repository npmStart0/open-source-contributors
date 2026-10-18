import { Link } from 'react-router-dom';
import { useTranslation } from '../i18n';

const REPO_URL = 'https://github.com/npmStart0/open-source-contributors';

const JSON_EXAMPLE = `{
  "username": "israel-dev",
  "name": "Israel Israeli",
  "bio": "Frontend developer learning and contributing.",
  "skills": ["React", "TypeScript", "JavaScript"]
}`;

export function ContributePage() {
  const { t } = useTranslation();

  return (
    <section className="contribute">
      <h2>{t('contribute.title')}</h2>
      <p>{t('contribute.intro')}</p>

      <h3>{t('contribute.workflowTitle')}</h3>
      <ol>
        <li>Fork &amp; clone the repository.</li>
        <li>
          Create a branch and add <code>contributors/&lt;username&gt;.json</code>.
        </li>
        <li>Commit, push, and open a pull request against main.</li>
        <li>Pass the automated checks and wait for review.</li>
      </ol>

      <h3>{t('contribute.schemaTitle')}</h3>
      <pre className="contribute__code">
        <code>{JSON_EXAMPLE}</code>
      </pre>

      <h3>{t('contribute.rulesTitle')}</h3>
      <ul>
        <li>username: lowercase letters, digits and hyphens; up to 39 characters.</li>
        <li>name: required, up to 80 characters.</li>
        <li>bio: optional, up to 280 characters.</li>
        <li>skills: optional, up to 10 items, no duplicates.</li>
        <li>The file name must match the username.</li>
        <li>Usernames must be unique (case-insensitive).</li>
      </ul>

      <h3>{t('contribute.troubleshootingTitle')}</h3>
      <ul>
        <li>Duplicate username: use your real, unique GitHub username.</li>
        <li>Filename mismatch: rename the file to match the username field.</li>
        <li>CI failed: read the workflow log, fix the error, push again.</li>
      </ul>

      <h3>{t('contribute.links')}</h3>
      <ul>
        <li>
          <a href={`${REPO_URL}#readme`} target="_blank" rel="noopener noreferrer">
            {t('contribute.readme')}
          </a>
        </li>
        <li>
          <a href={`${REPO_URL}/blob/main/CONTRIBUTING.md`} target="_blank" rel="noopener noreferrer">
            {t('contribute.contributing')}
          </a>
        </li>
        <li>
          <a href={REPO_URL} target="_blank" rel="noopener noreferrer">
            {t('contribute.repo')}
          </a>
        </li>
      </ul>

      <p>
        <Link to="/">{t('contribute.backHome')}</Link>
      </p>
    </section>
  );
}

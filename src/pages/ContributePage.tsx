import { Link } from 'react-router-dom';
import { useTranslation } from '../i18n';
import { CodeBlock } from '../components/CodeBlock';

const REPO_URL = 'https://github.com/npmStart0/open-source-contributors';

const JSON_EXAMPLE = `{
  "username": "israel-dev",
  "name": "Israel Israeli",
  "bio": "Frontend developer learning and contributing.",
  "skills": ["React", "TypeScript", "JavaScript"]
}`;

const GIT_EXAMPLE = `git clone https://github.com/<you>/open-source-contributors.git
cd open-source-contributors
git checkout -b add-<username>
# add contributors/<username>.json
git add contributors/<username>.json
git commit -m "Add <username> profile"
git push -u origin add-<username>`;

export function ContributePage() {
  const { t } = useTranslation();

  const steps = [
    t('contribute.step1'),
    t('contribute.step2'),
    t('contribute.step3'),
    t('contribute.step4'),
  ];

  const rules = [
    t('contribute.rule1'),
    t('contribute.rule2'),
    t('contribute.rule3'),
    t('contribute.rule4'),
    t('contribute.rule5'),
    t('contribute.rule6'),
  ];

  const troubleshooting = [
    t('contribute.trouble1'),
    t('contribute.trouble2'),
    t('contribute.trouble3'),
  ];

  return (
    <section className="contribute">
      <h2>{t('contribute.title')}</h2>
      <p className="contribute__intro">{t('contribute.intro')}</p>

      <a
        className="btn btn--primary"
        href={REPO_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        {t('contribute.openRepo')}
      </a>

      <h3>{t('contribute.workflowTitle')}</h3>
      <ol className="contribute__steps">
        {steps.map((step) => (
          <li key={step} className="contribute__step">
            {step}
          </li>
        ))}
      </ol>

      <h3>{t('contribute.schemaTitle')}</h3>
      <CodeBlock code={JSON_EXAMPLE} label={t('contribute.schemaTitle')} />

      <h3>{t('contribute.gitTitle')}</h3>
      <CodeBlock code={GIT_EXAMPLE} label={t('contribute.gitTitle')} />

      <h3>{t('contribute.rulesTitle')}</h3>
      <ul>
        {rules.map((rule) => (
          <li key={rule}>{rule}</li>
        ))}
      </ul>

      <h3>{t('contribute.troubleshootingTitle')}</h3>
      <ul>
        {troubleshooting.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h3>{t('contribute.links')}</h3>
      <ul className="contribute__links">
        <li>
          <a href={`${REPO_URL}#readme`} target="_blank" rel="noopener noreferrer">
            {t('contribute.readme')}
          </a>
        </li>
        <li>
          <a
            href={`${REPO_URL}/blob/main/CONTRIBUTING.md`}
            target="_blank"
            rel="noopener noreferrer"
          >
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

import { useMemo, useState, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation, type TranslationKey } from '../i18n';
import { CodeBlock } from '../components/CodeBlock';

const REPO_URL = 'https://github.com/npmStart0/open-source-contributors';
const SIGNUP_URL = 'https://github.com/signup';
const PULLS_URL = `${REPO_URL}/pulls`;

/** JSON profile example, kept LTR inside a CodeBlock. */
const JSON_EXAMPLE = `{
  "username": "israel-dev",
  "name": "Israel Israeli",
  "bio": "Frontend developer learning and contributing.",
  "skills": ["React", "TypeScript", "JavaScript"]
}`;

/** Optional advanced path for users who already have Git installed. */
const GIT_EXAMPLE = `git clone https://github.com/<your-username>/open-source-contributors.git
cd open-source-contributors
git checkout -b add-my-profile
# create contributors/<your-username>.json
git add contributors/<your-username>.json
git commit -m "Add my contributor profile"
git push -u origin add-my-profile`;

interface TutorialStep {
  /** Translation key for the step title. */
  titleKey: TranslationKey;
  /** The body of the step, rendered when the step is active. */
  render: (t: TranslateFn) => ReactNode;
}

type TranslateFn = (key: TranslationKey, vars?: Record<string, string | number>) => string;

/** A plain instruction list reused across steps. */
function Instructions({ items }: { items: string[] }) {
  return (
    <ol className="tutorial-step__instructions">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ol>
  );
}

/** A highlighted note / tip callout. `tone` is also conveyed by the text label, not color alone. */
function Callout({ tone, label, children }: { tone: 'info' | 'warn'; label: string; children: ReactNode }) {
  return (
    <p className={`tutorial-callout tutorial-callout--${tone}`}>
      <strong className="tutorial-callout__label">{label}</strong>
      <span>{children}</span>
    </p>
  );
}

export function ContributePage() {
  const { t } = useTranslation();
  const [active, setActive] = useState(0);
  const [showGit, setShowGit] = useState(false);

  const steps = useMemo<TutorialStep[]>(
    () => [
      {
        titleKey: 'contribute.s1.title',
        render: (t) => (
          <>
            <p className="tutorial-step__what">{t('contribute.s1.what')}</p>
            <Instructions
              items={[
                t('contribute.s1.i1'),
                t('contribute.s1.i2'),
                t('contribute.s1.i3'),
                t('contribute.s1.i4'),
              ]}
            />
            <a className="btn btn--primary" href={SIGNUP_URL} target="_blank" rel="noopener noreferrer">
              {t('contribute.s1.cta')}
            </a>
            <Callout tone="info" label={`${t('contribute.required')} ·`}>
              {t('contribute.s1.tip')}
            </Callout>
          </>
        ),
      },
      {
        titleKey: 'contribute.s2.title',
        render: (t) => (
          <>
            <p className="tutorial-step__what">{t('contribute.s2.what')}</p>
            <Instructions
              items={[
                t('contribute.s2.i1'),
                t('contribute.s2.i2'),
                t('contribute.s2.i3'),
                t('contribute.s2.i4'),
                t('contribute.s2.i5'),
              ]}
            />
            <a className="btn btn--primary" href={REPO_URL} target="_blank" rel="noopener noreferrer">
              {t('contribute.openRepo')}
            </a>
            <Callout tone="info" label={`${t('contribute.required')} ·`}>
              {t('contribute.s2.note')}
            </Callout>
          </>
        ),
      },
      {
        titleKey: 'contribute.s3.title',
        render: (t) => (
          <>
            <p className="tutorial-step__what">{t('contribute.s3.what')}</p>
            <Instructions
              items={[
                t('contribute.s3.i1'),
                t('contribute.s3.i2'),
                t('contribute.s3.i3'),
                t('contribute.s3.i4'),
                t('contribute.s3.i5'),
                t('contribute.s3.i6'),
              ]}
            />

            <h4 className="tutorial-step__subhead">{t('contribute.s3.exampleTitle')}</h4>
            <CodeBlock code={JSON_EXAMPLE} label={t('contribute.schemaTitle')} />

            <h4 className="tutorial-step__subhead">{t('contribute.s3.fieldsTitle')}</h4>
            <ul className="tutorial-step__fields">
              <li>{t('contribute.s3.fUsername')}</li>
              <li>{t('contribute.s3.fName')}</li>
              <li>{t('contribute.s3.fBio')}</li>
              <li>{t('contribute.s3.fSkills')}</li>
            </ul>

            <h4 className="tutorial-step__subhead">{t('contribute.s3.syntaxTitle')}</h4>
            <ul className="tutorial-step__fields">
              <li>{t('contribute.s3.syn1')}</li>
              <li>{t('contribute.s3.syn2')}</li>
              <li>{t('contribute.s3.syn3')}</li>
              <li>{t('contribute.s3.syn4')}</li>
              <li>{t('contribute.s3.syn5')}</li>
            </ul>
          </>
        ),
      },
      {
        titleKey: 'contribute.s4.title',
        render: (t) => (
          <>
            <p className="tutorial-step__what">{t('contribute.s4.what')}</p>
            <Instructions
              items={[
                t('contribute.s4.i1'),
                t('contribute.s4.i2'),
                t('contribute.s4.i3'),
                t('contribute.s4.i4'),
                t('contribute.s4.i5'),
              ]}
            />
            <Callout tone="info" label={`${t('contribute.required')} ·`}>
              {t('contribute.s4.why')}
            </Callout>
          </>
        ),
      },
      {
        titleKey: 'contribute.s5.title',
        render: (t) => (
          <>
            <p className="tutorial-step__what">{t('contribute.s5.what')}</p>
            <Instructions
              items={[
                t('contribute.s5.i1'),
                t('contribute.s5.i2'),
                t('contribute.s5.i3'),
                t('contribute.s5.i4'),
                t('contribute.s5.i5'),
                t('contribute.s5.i6'),
                t('contribute.s5.i7'),
                t('contribute.s5.i8'),
                t('contribute.s5.i9'),
              ]}
            />

            <h4 className="tutorial-step__subhead">{t('contribute.s5.diagramTitle')}</h4>
            <div className="pr-diagram" role="img" aria-label={t('contribute.s5.diagramArrow')}>
              <span className="pr-diagram__box pr-diagram__box--compare">
                <span className="pr-diagram__tag">Compare</span>
                <span className="pr-diagram__text">{t('contribute.s5.diagramCompare')}</span>
              </span>
              <span className="pr-diagram__arrow" aria-hidden="true">→</span>
              <span className="pr-diagram__box pr-diagram__box--base">
                <span className="pr-diagram__tag">Base</span>
                <span className="pr-diagram__text">{t('contribute.s5.diagramBase')}</span>
              </span>
            </div>
          </>
        ),
      },
      {
        titleKey: 'contribute.s6.title',
        render: (t) => (
          <>
            <p className="tutorial-step__what">{t('contribute.s6.what')}</p>
            <Instructions
              items={[
                t('contribute.s6.i1'),
                t('contribute.s6.i2'),
                t('contribute.s6.i3'),
                t('contribute.s6.i4'),
                t('contribute.s6.i5'),
              ]}
            />

            <h4 className="tutorial-step__subhead">{t('contribute.s6.errUnit')}</h4>
            <ul className="tutorial-step__fields">
              <li>{t('contribute.s6.err1')}</li>
              <li>{t('contribute.s6.err2')}</li>
              <li>{t('contribute.s6.err3')}</li>
            </ul>

            <Callout tone="warn" label={`${t('contribute.required')} ·`}>
              {t('contribute.s6.note')}
            </Callout>
          </>
        ),
      },
      {
        titleKey: 'contribute.s7.title',
        render: (t) => (
          <>
            <p className="tutorial-step__success">🎉 {t('contribute.s7.message')}</p>
            <ul className="contribute__links">
              <li>
                <a href={PULLS_URL} target="_blank" rel="noopener noreferrer">
                  {t('contribute.s7.linkPr')}
                </a>
              </li>
              <li>
                <Link to="/">{t('contribute.s7.linkDir')}</Link>
              </li>
              <li>
                <a href={REPO_URL} target="_blank" rel="noopener noreferrer">
                  {t('contribute.s7.linkHome')}
                </a>
              </li>
            </ul>
          </>
        ),
      },
    ],
    [],
  );

  const total = steps.length;
  const current = steps[active];
  const progressPercent = Math.round(((active + 1) / total) * 100);
  // Steps 1–6 are required actions; step 7 is the celebratory summary.
  const isRequired = active < total - 1;

  const goTo = (index: number) => {
    if (index < 0 || index >= total) return;
    setActive(index);
  };

  return (
    <section className="contribute tutorial">
      <h2>{t('contribute.title')}</h2>
      <p className="contribute__intro">{t('contribute.intro')}</p>
      <p className="contribute__intro">
        <strong>{t('contribute.introCommunity')}</strong>
      </p>
      {/* <Callout tone="info" label={`${t('contribute.optional')} ·`}>
        {t('contribute.noInstall')}
      </Callout> */}

      {/* Progress indicator */}
      <div className="tutorial-progress">
        <div
          className="tutorial-progress__bar"
          role="progressbar"
          aria-label={t('contribute.progressLabel')}
          aria-valuemin={1}
          aria-valuemax={total}
          aria-valuenow={active + 1}
          aria-valuetext={t('contribute.progressStatus', { current: active + 1, total })}
        >
          <span className="tutorial-progress__fill" style={{ inlineSize: `${progressPercent}%` }} />
        </div>
        <p className="tutorial-progress__status">
          {t('contribute.progressStatus', { current: active + 1, total })}
        </p>
      </div>

      {/* Clickable step list */}
      <nav className="tutorial-stepnav" aria-label={t('contribute.stepsNavLabel')}>
        <ol className="tutorial-stepnav__list">
          {steps.map((step, index) => {
            const title = t(step.titleKey);
            const state = index < active ? 'done' : index === active ? 'current' : 'todo';
            return (
              <li key={step.titleKey}>
                <button
                  type="button"
                  className="tutorial-stepnav__item"
                  data-state={state}
                  aria-current={index === active ? 'step' : undefined}
                  aria-label={t('contribute.goToStep', { current: index + 1, title })}
                  onClick={() => goTo(index)}
                >
                  <span className="tutorial-stepnav__num" aria-hidden="true">
                    {index + 1}
                  </span>
                  <span className="tutorial-stepnav__title">{title}</span>
                </button>
              </li>
            );
          })}
        </ol>
      </nav>

      {/* Active step card */}
      <article className="tutorial-step" aria-live="polite">
        <header className="tutorial-step__header">
          <span className="tutorial-step__badge" aria-hidden="true">
            {active + 1}
          </span>
          <div>
            <p className="tutorial-step__eyebrow">
              {t('contribute.stepLabel', { current: active + 1, total })}
              <span
                className={`tutorial-step__flag tutorial-step__flag--${isRequired ? 'required' : 'optional'}`}
              >
                {isRequired ? t('contribute.required') : t('contribute.optional')}
              </span>
            </p>
            <h3 className="tutorial-step__title">{t(current.titleKey)}</h3>
          </div>
        </header>
        <div className="tutorial-step__body">{current.render(t)}</div>
      </article>

      {/* Previous / Next navigation */}
      <div className="tutorial-nav">
        <button
          type="button"
          className="btn btn--ghost"
          onClick={() => goTo(active - 1)}
          disabled={active === 0}
        >
          <span aria-hidden="true">←</span> {t('contribute.prev')}
        </button>
        <button
          type="button"
          className="btn btn--primary"
          onClick={() => goTo(active + 1)}
          disabled={active === total - 1}
        >
          {t('contribute.next')} <span aria-hidden="true">→</span>
        </button>
      </div>

      {/* Optional advanced local Git path */}
      <section className="tutorial-optional">
        <button
          type="button"
          className="tutorial-optional__toggle"
          aria-expanded={showGit}
          onClick={() => setShowGit((v) => !v)}
        >
          <span className="tutorial-step__flag tutorial-step__flag--optional">
            {t('contribute.optional')}
          </span>
          <span>{t('contribute.gitTitle')}</span>
          <span className="tutorial-optional__chevron" aria-hidden="true">
            {showGit ? '▲' : '▼'}
          </span>
        </button>
        {showGit && (
          <div className="tutorial-optional__panel">
            <p>{t('contribute.gitIntro')}</p>
            <CodeBlock code={GIT_EXAMPLE} label={t('contribute.gitTitle')} />
          </div>
        )}
      </section>

      {/* Useful links */}
      <h3>{t('contribute.links')}</h3>
      <ul className="contribute__links">
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

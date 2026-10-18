# Open Source Contributors

An open-source directory that showcases contributors and their skills. Built
with React and TypeScript, the project encourages community participation and
makes it easy for developers to discover open-source contributors.

Anyone with a GitHub account can add their profile by opening a pull request
with a single JSON file. No React code changes are required.

## Features

- Contributor directory rendered as cards.
- Search by name and GitHub username.
- Filter by skills.
- Bilingual interface (Hebrew / English) with RTL and LTR support.
- Build-time validation of every contributor profile.
- Automated checks and deployment via GitHub Actions and GitHub Pages.

## Tech stack

React, TypeScript, Vite, Zod, Vitest + React Testing Library, GitHub Actions,
GitHub Pages.

## Local development

```bash
npm ci
npm run dev        # start the dev server
npm run build      # generate data + production build
npm run preview    # preview the production build
```

## Quality checks

```bash
npm run lint
npm run validate:contributors
npm run test:run
```

## Adding your profile

1. Fork this repository.
2. Create `contributors/<your-github-username>.json`.
3. Fill in the fields described in [CONTRIBUTING.md](./CONTRIBUTING.md).
4. Open a pull request. Automated checks validate your file.
5. After a maintainer merges your PR, the deployment workflow publishes your
   profile to the site.

See [CONTRIBUTING.md](./CONTRIBUTING.md) for the full guide and the JSON schema.

## License

[MIT](./LICENSE)

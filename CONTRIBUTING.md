# Contributing

Thanks for your interest in joining the directory. Adding your profile takes a
single JSON file and a pull request.

## Workflow

1. **Fork** this repository to your own GitHub account.
2. **Clone** your fork and create a **branch**:
   ```bash
   git checkout -b add-<your-username>
   ```
3. **Add** a file at `contributors/<your-github-username>.json`.
   The file name must match the `username` field exactly.
4. **Commit** and **push** your branch, then open a **pull request** against
   `main`.
5. Automated checks run on your pull request. Fix any reported issues.
6. A maintainer reviews and merges. The deployment workflow then publishes your
   profile.

## Profile schema

```json
{
  "username": "israel-dev",
  "name": "Israel Israeli",
  "bio": "Frontend developer learning and contributing.",
  "skills": ["React", "TypeScript", "JavaScript"]
}
```

### Rules

| Field      | Required | Rules                                                        |
| ---------- | -------- | ------------------------------------------------------------ |
| `username` | Yes      | Lowercase letters, digits and hyphens; up to 39 characters.  |
| `name`     | Yes      | Non-empty string, up to 80 characters.                       |
| `bio`      | No       | String, up to 280 characters.                                |
| `skills`   | No       | Array of up to 10 items, no duplicates.                      |

Additional rules:

- The file name must equal the `username` (e.g. `israel-dev.json` must contain
  `"username": "israel-dev"`).
- Usernames must be unique across the directory (case-insensitive).
- No extra fields are allowed beyond those listed above.
- The GitHub profile URL is derived automatically from your username.

## Validate locally

```bash
npm ci
npm run validate:contributors
```

## Troubleshooting

- **Duplicate username:** another profile already uses this username. Choose
  your actual GitHub username, which is unique.
- **File name does not match username:** rename the file so it equals the
  `username` field.
- **CI check failed:** read the workflow log, fix the reported validation error,
  commit and push again.
- **Invalid JSON:** make sure the file is valid JSON (no trailing commas, quoted
  keys and string values).

By contributing you agree to follow our [Code of Conduct](./CODE_OF_CONDUCT.md).

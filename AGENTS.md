## Cursor Cloud specific instructions

This is a Vite 8 (beta) + React 19 single-page application called **agentgalore**. There is no backend, database, or Docker dependency.

### Running services

| Command | Purpose |
|---|---|
| `npm run dev -- --host 0.0.0.0` | Start Vite dev server with HMR (default port 5173) |
| `npm run lint` | ESLint check |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview production build |

### Gotchas

- Vite 8 is a **beta** release (`^8.0.0-beta.13`). The `overrides` field in `package.json` pins Vite to this beta. If `npm install` warns about peer dependency conflicts, this is expected.
- No test framework is configured; there are no automated tests to run.

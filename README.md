# Acme Orders Platform (demo)

Small TypeScript service that exposes the **Orders** and **Users** read APIs used by the
storefront and the back-office. It is the repository watched by **Team Brain**, our Slack
teammate that keeps tests and docs in sync with API changes.

## What's inside

| Path | What |
|---|---|
| `api/orders.ts` | `GET /orders`, list of orders (owner: Douglas) |
| `api/users.ts` | `GET /users`, workspace members (owner: Ale) |
| `api/*.test.ts` | vitest tests, one file per API |
| `docs/` | API docs, architecture, conventions, onboarding, ADRs |

## Run it locally

Requirements: **Node.js 22+** and npm.

```bash
git clone https://github.com/douglac/team-brain-demo.git
cd team-brain-demo
npm install
npm test          # runs vitest once (all api/*.test.ts)
npx vitest        # watch mode while you work
```

There is no server to start: the handlers are plain functions so they can be tested in
isolation. The HTTP layer lives in the gateway repo (see `docs/architecture.md`).

## Contributing

Read `CONTRIBUTING.md` before opening a PR. Short version: small PRs, green tests, and
**a field rename is a breaking change**: update fixtures, tests and docs in the same PR.

## Getting help

- Ask **@Team Brain** in `#teambrain` (it answers from these docs, the code and our history).
- Orders questions → Douglas · Users questions → Ale (see `docs/onboarding.md`).

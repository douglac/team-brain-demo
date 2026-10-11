# Contributing

## Branching

- `main` is always releasable. Never push broken tests to `main`.
- Branch names: `feat/<topic>`, `fix/<topic>`, `chore/<topic>`. Team Brain uses `team-brain/<sha>`.
- Rebase on `main` before asking for review; we squash-merge.

## Pull requests

1. Keep PRs small (under ~300 lines of diff) and focused on one change.
2. `npm test` must be green locally and in CI.
3. Fill in the PR description: what changed, why, how it was tested.
4. At least **one approval** from the owner of the touched service (see `docs/onboarding.md`).
5. Link the Slack thread or issue that motivated the change.

## API changes

Our public responses follow `docs/api-conventions.md`.

- **A field rename is a breaking change.** In the same PR, update:
  - the handler in `api/`,
  - the fixtures/assertions in `api/*.test.ts`,
  - the examples and field tables in `docs/<api>.md`.
- Adding an optional field is non-breaking, but still document it.
- Removing a field needs an ADR in `docs/adr/` and a heads-up in `#teambrain`.

Team Brain enforces the rename rule automatically (rule `api-change-sync`): after a push it
updates tests and docs and opens a fix PR. If it gets something wrong, **reply in the Slack
thread**; it turns the correction into a versioned rule.

## Commit messages

Imperative mood, short subject: `Rename items → results in GET /orders`.
Reference the ADR when a change follows one: `(ADR-0001)`.

## Code style

- TypeScript strict mode, no `any` in handlers.
- One exported handler per file in `api/`, named `list<Resource>()`.
- Tests describe the HTTP contract (`GET /orders returns every order`), not implementation details.

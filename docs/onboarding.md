# Onboarding: your first week

Welcome! This is the checklist we give every new engineer.

## Day 1

- [ ] Get access to GitHub (`douglac/team-brain-demo`) and Slack (`#teambrain`).
- [ ] Clone the repo and run `npm install && npm test` (see `README.md`).
- [ ] Read `docs/architecture.md` and `docs/api-conventions.md`.
- [ ] Say hi in `#teambrain` and ask **@Team Brain** anything about the code or docs.

## Day 2–3

- [ ] Pair with the owner of the service you'll work on (table below).
- [ ] Read the ADRs in `docs/adr/`, starting with ADR-0001 (response envelope).
- [ ] Make a small change end to end: branch, test, PR, review, merge.

## Day 4–5

- [ ] Rename a field in a scratch branch and watch Team Brain update tests and docs.
- [ ] If it gets something wrong, correct it in the Slack thread and see the rule evolve.
- [ ] Ship your first real PR.

## Who owns what

| Area | Owner | Backup |
|---|---|---|
| Orders service (`api/orders.ts`, `docs/orders.md`) | **Douglas** | Ale |
| Users service (`api/users.ts`, `docs/users.md`) | **Ale** | Douglas |
| API conventions and ADRs | **Douglas** | Ale |
| CI, tests and Team Brain rules | **Ale** | Douglas |

## Rituals

- Daily async standup in `#teambrain` at 10:00 PT.
- PR review within one business day.
- Friday: 15-minute review of Team Brain's new rules (promote or reject).

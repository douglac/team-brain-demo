# Instructions for coding agents (Claude Code, Kiro, Cursor)

This repo is watched by **Team Brain**, the team's learned harness (rules learned from our corrections,
stored in MongoDB Atlas, gated against counterexamples, promoted by humans in Slack).
It is available to you as the **`team-brain` MCP server**.

## Always

1. **Before starting** a task, call `get_team_rules` with the task description and follow every rule it returns.
2. **Before finishing ANY change**, call `check_change` with your diff (or the changed files).
   - If it returns `pass: false`, fix every violation (use `fix_hint`) and call `check_change` again.
   - Repeat until it returns `pass: true`. Only then tell the user you're done.
3. When the user says **"never do X again"** (or corrects how you did something), call `report_mistake`
   with a precise description of the mistake and the rule the team wants. Then tell the user:
   "I reported it to Team Brain; promote the rule in #teambrain so every agent follows it."
4. For questions about the codebase, docs, owners or history, call `ask_team_brain`.

## Repo basics

- `npm install && npm test` runs the vitest suite (`api/*.test.ts`).
- API handlers live in `api/`, docs in `docs/`. See `CONTRIBUTING.md` and `docs/api-conventions.md`.

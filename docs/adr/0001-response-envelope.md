# ADR-0001: Response envelope for list endpoints

- **Status:** Accepted
- **Date:** 2026-09-02
- **Deciders:** Douglas (orders), Ale (users)

## Context

Our first endpoints returned bare JSON arrays (`[ {...}, {...} ]`). When we needed
pagination we had nowhere to put the cursor without breaking every client, and some
JSON parsers in old storefront code treated a top-level array as a security risk.

## Decision

Every list endpoint returns an **object with one named array field**, for example
`{ "entries": [...] }`, and may add sibling metadata such as `nextCursor` later.

The array's field name is part of the public contract. Renaming it is a breaking change:
the same PR must update the handler, the tests' fixtures/assertions and the docs.

## Consequences

- ✅ We can add pagination, totals or warnings without breaking clients.
- ✅ Responses are easier to extend and to validate with schemas.
- ⚠️ Field renames ripple into tests and docs. To make that cheap, Team Brain watches
  pushes and opens a fix PR (rule `api-change-sync`); humans correct it in Slack when
  it's wrong, and the correction becomes a versioned rule.
- ⚠️ Clients must read the named field instead of the response root.

## Alternatives considered

1. **Bare arrays + `Link` headers for pagination.** Rejected: headers are often dropped by
   proxies and are awkward in the storefront client.
2. **A generic `{ data: [...] }` for every endpoint.** Considered; we kept per-resource
   names for readability, but `GET /users` uses `data` today.

# API conventions

## Response envelope

List endpoints never return a bare JSON array. They return an **object with one named array
field** (see ADR-0001):

```json
{ "<field>": [ { "id": "..." } ] }
```

Today: `GET /orders` → `{ "entries": [...] }`, `GET /users` → `{ "data": [...] }`.
The field name is part of the contract: renaming it is a **breaking change**.

## Naming

- `camelCase` for JSON fields, plural nouns for arrays.
- IDs are prefixed strings: `ord_…`, `usr_…`.
- Money is a number in the response; the currency comes from the account settings.

## Pagination

- Cursor based. When a list is paginated, the envelope gains a sibling field:
  `{ "<field>": [...], "nextCursor": "c_123" }`.
- `nextCursor` is omitted on the last page. Clients pass it back as `?cursor=`.
- This is why we use an envelope: adding `nextCursor` doesn't break clients.

## Errors

All errors share one shape and a proper HTTP status:

```json
{ "error": { "code": "not_found", "message": "Order ord_9 does not exist" } }
```

- `code` is a stable snake_case identifier clients can switch on.
- `message` is for humans and may change.

## Versioning

- Additive changes ship without a version bump.
- Breaking changes (renames, removals, type changes) need an ADR and must update
  tests and docs in the same PR (rule `api-change-sync`, enforced by Team Brain).

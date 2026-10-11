# Users API

`GET /users` returns the members of the workspace.

```json
{ "members": [{ "id": "usr_1", "name": "Ada" }] }
```

| Field | Type | Description |
|---|---|---|
| `members` | `User[]` | Workspace members. |

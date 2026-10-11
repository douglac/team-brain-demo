# Orders API

`GET /orders` returns all orders of the account.

```json
{ "entries": [{ "id": "ord_1", "total": 42 }] }
```

| Field | Type | Description |
|---|---|---|
| `entries` | `Order[]` | Every order, newest first. |

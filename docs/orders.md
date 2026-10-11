# Orders API

`GET /orders` returns all orders of the account.

```json
{ "items": [{ "id": "ord_1", "total": 42 }] }
```

| Field | Type | Description |
|---|---|---|
| `items` | `Order[]` | Every order, newest first. |

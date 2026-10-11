# Orders API

`GET /orders` returns all orders of the account.

```json
{ "results": [{ "id": "ord_1", "total": 42 }] }
```

| Field | Type | Description |
|---|---|---|
| `results` | `Order[]` | Every order, newest first. |

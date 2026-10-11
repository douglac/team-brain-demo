# Orders API

`GET /orders` returns all orders of the account.

```json
{ "orders": [{ "id": "ORD-0001", "total": 42 }] }
```

| Field | Type | Description |
|---|---|---|
| `orders` | `Order[]` | Every order, newest first. |
| `orders[].id` | `string` | Order ID, e.g. `ORD-0001`. |
| `orders[].total` | `number` | Order total. |

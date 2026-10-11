# Orders API

`GET /orders` returns all orders of the account.

```json
{ "orders": [{ "id": "ord_1", "total": 42 }] }
```

| Field | Type | Description |
|---|---|---|
| `orders` | `Order[]` | Every order, newest first. |
| `orders[].id` | `string` | Order ID, e.g. `ord_1`. |
| `orders[].total` | `number` | Order total. |

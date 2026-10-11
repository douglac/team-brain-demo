export interface Money {
  amount: number; // minor units (cents)
  currency: string; // ISO 4217
}

export interface Order {
  id: string;
  total: Money;
}

const ORDERS: Order[] = [
  { id: "ord_1", total: { amount: 4200, currency: "USD" } },
  { id: "ord_2", total: { amount: 700, currency: "USD" } },
];

/** GET /orders */
export function listOrders() {
  return { orders: ORDERS };
}

export interface Order {
  id: string;
  total: number;
}

const ORDERS: Order[] = [
  { id: "ord_1", total: 42 },
  { id: "ord_2", total: 7 },
];

/** GET /orders */
export function listOrders() {
  return { items: ORDERS };
}

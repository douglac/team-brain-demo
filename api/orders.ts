export interface Order {
  id: string;
  total: number;
}

const ORDERS: Order[] = [
  { id: "ORD-0001", total: 42 },
  { id: "ORD-0002", total: 7 },
];

/** GET /orders */
export function listOrders() {
  return { orders: ORDERS };
}

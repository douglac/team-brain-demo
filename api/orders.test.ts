import { describe, expect, it } from "vitest";
import { listOrders } from "./orders";

describe("GET /orders", () => {
  it("returns every order", () => {
    const body = listOrders();
    expect(body.orders).toHaveLength(2);
    expect(body.orders[0].id).toBe("ord_1");
    expect(body.orders[1].id).toBe("ord_2");
  });
});

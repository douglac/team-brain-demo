import { describe, expect, it } from "vitest";
import { listOrders } from "./orders";

describe("GET /orders", () => {
  it("returns every order", () => {
    const body = listOrders();
    expect(body.items).toHaveLength(2);
    expect(body.items[0].id).toBe("ord_1");
  });
});

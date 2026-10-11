import { describe, expect, it } from "vitest";
import { listOrders } from "./orders";

describe("GET /orders", () => {
  it("returns every order", () => {
    const body = listOrders();
    expect(body.results).toHaveLength(2);
    expect(body.results[0].id).toBe("ord_1");
  });
});

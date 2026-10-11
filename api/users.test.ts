import { describe, expect, it } from "vitest";
import { listUsers } from "./users";

describe("GET /users", () => {
  it("returns every user", () => {
    const body = listUsers();
    expect(body.members).toHaveLength(3);
    expect(body.members.map((u) => u.name)).toContain("Grace");
  });
});

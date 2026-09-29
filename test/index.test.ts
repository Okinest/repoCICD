import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { add } from "../index.ts";

describe("add", () => {
  it("additionne deux nombres", () => {
    assert.equal(add(1, 2), 3);
  });

  it("gère les nombres négatifs", () => {
    assert.equal(add(-1, 1), 0);
  });
});

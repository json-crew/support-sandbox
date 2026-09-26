import { test } from "node:test";
import assert from "node:assert/strict";
import { greeting } from "../src/greeting.ts";

test("greets by trimmed name", () => {
  assert.equal(greeting("  Ada "), "Hello, Ada");
});

test("falls back for empty name", () => {
  assert.equal(greeting("   "), "Hello, stranger");
});

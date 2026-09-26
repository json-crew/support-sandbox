import { test } from "node:test";
import assert from "node:assert/strict";

// Czerwone WYŁĄCZNIE na gałęzi próby negatywnej N1 — po ewentualnym merge'u obojętne.
test("negative case N1 red check", () => {
  assert.notEqual(process.env.GITHUB_HEAD_REF, "ai-fix/HUB-2-a12");
});

import { describe, it, expect } from "vitest";
import { countResponseTimeRegressions } from "./countResponseTimeRegressions";

describe("countResponseTimeRegressions", () => {
  it("Initial", () => {
    expect(countResponseTimeRegressions([100, 200, 150, 300])).toBe(2);
  });
  it("One value", () => {
    expect(countResponseTimeRegressions([100])).toBe(0);
  });
  it("Without Values", () => {
    expect(countResponseTimeRegressions([])).toBe(0);
  });
});

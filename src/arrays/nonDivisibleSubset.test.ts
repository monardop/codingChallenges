import { describe, it, expect } from "vitest";
import { nonDivisibleSubset } from "./nonDivisibleSubset";

describe("nonDivisibleSubset", () => {
  it("Example 1", () => expect(nonDivisibleSubset(3, [1, 7, 2, 4])).toBe(3));
  it("Example 2", () => expect(nonDivisibleSubset(4, [19, 10, 12, 10, 24, 25, 22])).toBe(3));
});

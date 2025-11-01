import { describe, it, expect } from "vitest";
import { surviveRoulette } from "./surviveRoulette";

describe("surviveRoulette", () => {
  it("One movement down", () => {
    expect(surviveRoulette(5, 3)).toBe(3);
  });

  it("Only two up", () => {
    expect(surviveRoulette(1, 1)).toBe(0);
  });

  it("Only two down", () => {
    expect(surviveRoulette(6, 2)).toBe(4);
  });

  it("All one down", () => {
    expect(surviveRoulette(10, 3)).toBe(3);
  });

  it("All one down", () => {
    expect(surviveRoulette(2, 1)).toBe(1);
  });
});

import { mergeHighDefinitionIntervals } from "./mergeHighDefinitionIntervals";
import { describe, it, expect } from "vitest";

describe("mergeHighDefinitionIntervals", () => {
  it("Ejemplo", () => {
    expect(
      mergeHighDefinitionIntervals([
        [2, 6],
        [1, 3],
        [8, 10],
        [15, 18],
      ])
    ).toStrictEqual([
      [1, 6],
      [8, 10],
      [15, 18],
    ]);
  });
  it("Un elemento", () => {
    expect(mergeHighDefinitionIntervals([[2, 6]])).toStrictEqual([[2, 6]]);
  });
});

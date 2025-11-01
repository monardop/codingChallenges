import { describe, it, expect } from "vitest";
import { binarySearch } from "./binarySearch";

describe("binarySearch", () => {
  it("Left search", () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 3)).toBe(2);
  });
  it("Right search", () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 7)).toBe(6);
  });
  it("Left limit search", () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 1)).toBe(0);
  });
  it("Right limit search", () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 8)).toBe(7);
  });
  it("The element don't exist", () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 11)).toBe(-1);
  });
  it("Empty array", () => {
    expect(binarySearch([], 11)).toBe(-1);
  });
});

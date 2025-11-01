import { describe, it, expect } from "vitest";
import { changeLock } from "./changeLock";

describe("changeLock", () => {
  it("One movement down", () => {
    expect(changeLock("1234", "5678")).toBe(16);
  });

  it("Only two up", () => {
    expect(changeLock("0022", "0044")).toBe(4);
  });

  it("Only two down", () => {
    expect(changeLock("0099", "0011")).toBe(4);
  });

  it("All one down", () => {
    expect(changeLock("9999", "0000")).toBe(4);
  });
});

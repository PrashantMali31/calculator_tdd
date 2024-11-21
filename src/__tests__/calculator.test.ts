import { add } from "../utils/calculator";

describe("Calculator", () => {
  it("should return 0 for an empty string", () => {
    expect(add("")).toBe(0);
  });

  it("should return the number itself for a single number", () => {
    expect(add("1")).toBe(1);
    expect(add("5")).toBe(5);
  });

  it("should return the sum for two comma-separated numbers", () => {
    expect(add("1,5")).toBe(6);
  });

  it("should handle multiple numbers", () => {
    expect(add("1,2,3,4")).toBe(10);
  });

  it("should handle newlines as delimiters", () => {
    expect(add("1\n2,3")).toBe(6);
  });

  it("should support custom delimiters", () => {
    expect(add("//;\n1;2")).toBe(3);
  });

  it("should throw an exception for negative numbers", () => {
    expect(() => add("1,-2,3,-4")).toThrow(
      "negative numbers not allowed: -2, -4"
    );
  });
});

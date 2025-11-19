import { addFunction } from "../src/function-interface";

describe("Function Interface Test", () => {
  it("should return number from addFunction with addition operator", () => {
    const addtion: addFunction = (val1: number, val2: number): number => {
      return val1 + val2;
    };
    expect(addtion(10, 20)).toBe(30);
    console.info(addtion(10, 20));
  });
  it("Should return number from addFunction with substraction operator", () => {
    const substr: addFunction = (a: number, b: number): number => {
      return a - b;
    };
    expect(substr(10, 20)).toBe(20);
    console.info(substr(20, 10));
  });
});

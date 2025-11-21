import { sample } from "../../src/basic/dataUnionType";

it("should return Union type data from var sample", function (): void {
  function process(value: number | string | boolean) {
    if (typeof value === "string") {
      return value.toUpperCase();
    } else if (typeof value === "number") {
      return value + 2;
    } else if (typeof value === "boolean") {
      return !value;
    }
  }
  expect(process(100)).toBe(102);
  expect(process("Jhon Doe")).toBe("JHON DOE");
  expect(process(true)).toBe(false);
});

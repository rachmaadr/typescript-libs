import { person } from "../../src/basic/dataAny";

it("should return object from var person", function (): void {
  expect(person).toEqual({
    id: 1,
    name: "jhon doe",
    age: 30,
  });
});

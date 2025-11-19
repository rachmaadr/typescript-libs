import { person } from "../src/dataAny";

it("should return object from var person", function (): void {
  expect(person).toEqual({
    id: 1,
    name: "jhon doe",
    age: 30,
  });
});

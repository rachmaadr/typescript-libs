import { person } from "../../src/basic/objectType";

it("Should return object from person", () => {
  const {id,name} = person
  expect(id).toEqual(34592828383992922n);
  expect(name).toEqual("Jhon Doe");
})
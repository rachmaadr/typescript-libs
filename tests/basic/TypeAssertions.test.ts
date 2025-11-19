import { Person, person } from "../src/TypeAssertions";

it("Should return from the data type that has been converted to an assertion", () => {
  const person2: Person = person as Person;
  console.info(person2);
});

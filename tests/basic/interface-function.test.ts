import { Person } from "./../src/interface-function";

it("Should return object from Person", () => {
  const person: Person = {
    name: "Jhon Doe",
    sayHello: function (name: string): string {
      return `Hello ${name} this is my name ${this.name}`;
    },
  };
  expect(person.name).toBe("Jhon Doe");
  console.info(person.sayHello("Budi"));
});

it("should can run from class Person to Customer in Class Relationship section", () => {
  class Customer {
    constructor(public name: string) {}
  }
  class Person {
    constructor(public name: string) {}
  }
  const person: Person = new Customer("Andi");
  console.info(person);
});

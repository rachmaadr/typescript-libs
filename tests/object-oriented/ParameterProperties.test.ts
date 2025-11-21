describe("Parameter Properties", () => {
  class Person {
    constructor(public name: string = "") {}
  }
  it("Should return object from Person class", () => {
    const person: Person = new Person();
    person.name = "Jhon Doe";
    expect(person.name).toBe("Jhon Doe");
    console.info(person);
  });
});

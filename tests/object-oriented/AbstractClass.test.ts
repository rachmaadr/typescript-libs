import { Customer } from "../../src/object-oriented/AbstractClass";

it("should execute child class from abstract parent class", () => {
  class RegularCutomer extends Customer {
    name: string;
    constructor(id: number, name: string) {
      super(id);
      this.name = name;
    }
    sayHello(name: string): string {
      return `Hello ${name}, my name is ${this.name}`;
    }
  }
  const regCustomer: RegularCutomer = new RegularCutomer(1, "Jhon Doe");
  console.info(regCustomer.sayHello("Allice"));
  expect(regCustomer.sayHello("Allice")).toBe(
    "Hello Allice, my name is Jhon Doe"
  );
});

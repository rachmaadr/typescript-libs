import { HasName, CanSayHello } from "../../src/object-oriented/Interface";

it("Should return from class Customer as object", () => {
  class User implements HasName, CanSayHello {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
    sayHello(name: string): void {
      console.info(`Hello ${name}, my name is ${this.name}`);
    }
  }

  const users = new User("jhon doe");
  users.sayHello("allice");
});

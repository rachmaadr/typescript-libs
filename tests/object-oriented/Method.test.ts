import { Customer } from "../../src/object-oriented/Method";

it("Should return from class Customer as object", () => {
  const customer = new Customer("Jhon Doe", 1);
  console.info(customer.sayHello("Allice"));
});

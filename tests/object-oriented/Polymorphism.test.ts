import {
  Employee,
  Manager,
  VicePresident,
} from "./../../src/object-oriented/Polymorphism";

describe("Polymorphism Test", () => {
  it("should return object instance from class", () => {
    let employee: Employee = new Employee("Jhon Doe");
    console.info(employee);
    employee = new Manager("Alice");
    console.info(employee);
    employee = new VicePresident("Robert");
    console.info(employee);
  });
  it("should execute from function sayHello part of employee class", () => {
    function sayHello(employee: Employee) {
      console.info(`Hello ${employee.name}`);
    }
    sayHello(new Employee("Max"));
    sayHello(new Manager("Felix"));
    sayHello(new Employee("Albert"));
  });
});

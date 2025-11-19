import { Employees, Managers } from "../src/interface-extends";

describe("Interface Extends Test", () => {
  it("Should return object from Employee", () => {
    const employee: Employees = {
      id: 1,
      name: "Jhon Doe",
    };
    expect(employee.id).toBe(1);
    expect(employee.name).toBe("Jhon Doe");
    console.info(employee);
  });
  it("Should retunr object from manager", () => {
    const manager: Managers = {
      id: 2,
      name: "Jhon Doe",
      address: "Jalan Kalian",
      numberOfEmployees: 10,
      department: "IT",
    };
    expect(manager.numberOfEmployees).toBe(10);
    expect(manager.department).toBe("IT");
    console.info(manager);
  });
});

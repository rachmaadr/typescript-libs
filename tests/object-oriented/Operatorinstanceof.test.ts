describe("Operator Instance of", () => {
  class Employee {}
  class Manager {}
  it("Should can execute instace of class", () => {
    const jhon: Employee = new Employee();
    const allice: Manager = new Manager();
    expect(jhon instanceof Employee).toBe(true);
    expect(jhon instanceof Manager).toBe(false);
    expect(allice instanceof Manager).toBe(true);
    expect(allice instanceof Employee).toBe(false);
  });
});

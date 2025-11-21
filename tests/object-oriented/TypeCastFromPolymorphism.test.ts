import {
  Employee,
  Manager,
  VicePresident,
} from "../../src/object-oriented/Polymorphism";

it("should execute from type cast part of polymorphism class", () => {
  function sayHello(employee: Employee) {
    if (employee instanceof VicePresident) {
      const vp = employee as VicePresident;
      console.info(`Hello VP ${vp.name}`);
    } else if (employee instanceof Manager) {
      const manager = employee as Manager;
      console.info(`Hello Manager ${manager.name}`);
    } else {
      console.info(`Hello Employee ${employee.name}`);
    }
  }
  sayHello(new VicePresident("Alex"));
  sayHello(new VicePresident("Robert"));
  sayHello(new VicePresident("Ferdinan"));
});

class Employee {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  sayHello(name: string) {
    console.info(`Hello ${name}, my name is ${this.name}`);
  }
}

class Manager extends Employee {
  sayHello(name: string): void {
    console.info(`Hello ${name}, my name is ${this.name}, see you`);
  }
}

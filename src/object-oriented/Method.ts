export class Customer {
  readonly id: number;
  name: string;
  age?: number;
  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }

  sayHello(name: string): void {
    console.info(`Hello ${name}, my name is ${this.name}`);
  }
}
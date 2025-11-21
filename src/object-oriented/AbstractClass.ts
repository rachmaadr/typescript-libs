export abstract class Customer {
  readonly id: number;
  abstract name: string;
  constructor(id: number) {
    this.id = id;
  }
  abstract sayHello(name: string): void;
}

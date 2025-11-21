class Customer {
  readonly id: number;
  name: string;
  age?: number;
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

const customer = new Customer(1, "Jhon Doe");
customer.age = 30;
console.info(customer);

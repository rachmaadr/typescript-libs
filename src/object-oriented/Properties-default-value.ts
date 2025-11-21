class Customer{
  id: number = 1
  name: string = ""
  age?: number

  constructor(id: number, name: string){
    this.id = id
    this.name = name
  }
}

const customer = new Customer(1, "Jhon Doe")
console.info(customer)
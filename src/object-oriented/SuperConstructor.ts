class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class employee extends Person {
  department: string;
  constructor(name: string, department: string) {
    super(name);
    this.department = department;
  }
}

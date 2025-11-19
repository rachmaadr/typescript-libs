it("Should return undifined", () => {
  function sayHello(name?: string): void {
    if (name) {
      console.log(`Hello ${name}`);
    } else {
      console.log("Hello");
    }
  }
  sayHello("Jhon Doe");
  const name: string | undefined = undefined;
  sayHello(name);
  //sayHello(null);

})
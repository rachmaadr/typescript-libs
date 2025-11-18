it("Should return undefined", function (): void {
  function sayHello(name?: string): void {
    if (name) {
      console.info(`Hello ${name}`);
    } else {
      console.info("Hello");
    }
  }
  sayHello("Jhon Doe");
  const name: string | undefined = undefined;
  expect(name).toBeUndefined();
});

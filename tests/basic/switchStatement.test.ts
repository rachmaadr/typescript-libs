it("SHould return value from swith statement", () => {
  const name: string = "Jhon";
  function sayHi(name: string): string {
    switch (name) {
      case "Jhon":
        return "Hi Jhon";
      case "Allice":
        return "Hi Allice";
      default:
        return "Hi Bob";
    }
  }
  expect(sayHi("Jhon")).toBe("Hi Jhon");
  console.info(sayHi("Jhon"));
});

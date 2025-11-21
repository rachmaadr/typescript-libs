import { sayHello, printName } from "../../src/basic/function";

describe("Function Test", () => {
  it("should return hello jhon doe with default value string", () => {
    expect(sayHello("Jhon Doe")).toBe("Hello Jhon Doe");
    console.info(sayHello("Jhon Doe"));
  });
  it("should print hello jhon doe with default value void", () => {
    expect(printName("Jhon doe")).toBeUndefined();
    console.info(printName("Jhon Doe"));
  });
  it("should return hello jhon doe with default paramater is guest", () => {
    function printHello(name: string = "Guest"): string {
      return `Hello ${name}`;
    }
    expect(printHello("Jhon Doe")).toBe("Hello Jhon Doe");
    expect(printHello()).toBe("Hello Guest");
    console.info(printHello("Jhon Doe"));
    console.info(printHello());
  });
  // ! Sum Function with rest parameter
  it("should return value from sum function", () => {
    function sum(...values: number[]): number {
      let total = 0;
      for (const value of values) {
        total += value;
      }
      return total;
    }
    expect(sum(1, 2, 3, 4, 5)).toEqual(15);
    console.info(sum(1, 2, 3, 4, 5));
  });
  it("should return from function overloading", () => {
    function callMe(value: string): string;
    function callMe(value: number): number;
    function callMe(value: any): any {
      if (typeof value === "string") {
        return value;
      } else if (typeof value === "number") {
        return value;
      }
    }
    expect(callMe(100)).toEqual(100);
    expect(callMe("Jhon Doe")).toBe("Jhon Doe");

    console.info(callMe(100));
    console.info("Jhon Doe");
  });
  it("should return value from function as parameter of function", () => {
    function sayHello(name: string, filter: (name: string) => string) {
      return `Hello ${filter(name)}`;
    }

    function toUpper(name: string): string {
      return name.toUpperCase();
    }

    expect(sayHello("jhon doe", toUpper)).toBe("Hello JHON DOE");
    console.info(sayHello("jhon doe", toUpper));
  });
  // ! return value from anonymous function as callback
  it("should return value from function as parameter of anonymous function", () => {
    function sayHello(name: string, filter: (name: string) => string) {
      return `Hello ${filter(name)}`;
    }
    expect(
      sayHello("Jhon Doe", function (name: string): string {
        return name.toUpperCase();
      })
    ).toBe("Hello JHON DOE");
    console.info(
      sayHello("Jhon Doe", function (name: string): string {
        return name.toUpperCase();
      })
    );
  });
  it("Should return value from function as paramater arrow function as a callback", () => {
    function sayHello(name: string, filter: (name: string) => string) {
      return `Hello ${filter(name)}`;
    }
    expect(
      sayHello("Allice", (name: string): string => name.toUpperCase())
    ).toBe("Hello ALLICE");
    console.info(
      sayHello("allice", (name: string): string => name.toUpperCase())
    );
  });
});

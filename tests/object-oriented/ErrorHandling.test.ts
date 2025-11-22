describe("Error Handling with validation error and try and catch", () => {
  it("Should can be run from validation error", () => {
    class ValidationError extends Error {
      constructor(public message: string) {
        super(message);
      }
    }
    function doubleIt(value: number): number {
      if (value < 0) {
        throw new ValidationError("Value cannot be less than 0");
      }
      return value * 2;
    }
  });
  it("Should can be run from try and catch method", () => {
    class ValidationError extends Error {
      constructor(public message: string) {
        super(message);
      }
    }
    function doubleIt(value: number): void {
      try {
        const result = doubleIt(-1);
        console.info(result);
      } catch (error) {
        if (error instanceof ValidationError) {
          console.info(error.message);
        }
      }
    }
  });
});

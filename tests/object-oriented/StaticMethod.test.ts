it("Should can create static method in class MathUtils", () => {
  class MathUtils {
    static sum(...values: number[]): number {
      let total = 0;
      for (let value of values) {
        total += value;
      }
      return total;
    }
  }
  console.info(MathUtils.sum(1, 2, 3, 4, 5));
});

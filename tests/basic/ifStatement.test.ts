import { examValue } from "../../src/basic/ifStatement";

it("Should return value from variable examvalue with if statement", () => {
  function getExamResult(examValue: any): string {
    if (examValue > 80) {
      return "Good";
    } else if (examValue > 60) {
      return "Not Bad";
    } else {
      return "Try Again";
    }
  }
  const result = getExamResult(examValue);
  expect(result).toBe("Good");
  console.info(getExamResult(examValue));
});

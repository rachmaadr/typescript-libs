it("Should return value from ternary operator", () => {
  const value: number = 80;
  const result = value >= 75 ? "Congrats" : "You failed";
  expect(result).toBe("Congrats");
});

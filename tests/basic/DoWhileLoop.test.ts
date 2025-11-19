it("should return value from do while loop", () => {
  let counter = 0;
  do {
    console.info(counter);
    counter++;
  } while (counter < 100);
});

it("SHould return value from for loop of array", () => {
  const fruits = ["apple", "banana", "orange"];
  for (let i = 0; i < fruits.length; i++) {
    console.info(fruits[i]);
  }

  for (const fruit of fruits) {
    console.info(fruit);
  }

  for (const index in fruits) {
    console.info(index);
  }
});

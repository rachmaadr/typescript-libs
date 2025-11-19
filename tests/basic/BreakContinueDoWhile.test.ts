it("SHould return value from do While with break and continue", () => {
  let counter = 0;
  do {
    counter++;
    if (counter == 10) {
      break;
    }
    if (counter % 2 == 0) {
      continue;
    }
    console.info(counter);
  } while (true);
});

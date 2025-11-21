import { Category } from "./../../src/object-oriented/Getter-Setter";

it("Should return value from Category Class", () => {
  const categories = new Category();
  console.info(categories);
  categories.name = "Food";
  console.info(categories.name);
  categories.name = "";
  console.info(categories.name);
});

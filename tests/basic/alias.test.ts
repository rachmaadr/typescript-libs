import { Category, Product } from "./../src/alias";

describe("Alias Test", () => {
  it("Should return object from Product & Category", function (): void {
    const category: Category = {
      id: "1",
      name: "food",
    };
    const product: Product = {
      id: "1",
      name: "Nasi Gila",
      price: 10000,
      category: category,
    };
    console.info(category);
    console.info(product);
  });
});

import { Category, Product } from "../src/type-alias-for-union-type";

it("Should return object from Product and Category", function (): void {
  const categories: Category = {
    id: 1,
    name: "Gadget",
  };
  const products: Product = {
    id: "S-20-2025",
    name: "Samsung S25 Ultra",
    price: 20000000,
    category: categories,
  };
  console.info(categories);
  console.info(products);
});

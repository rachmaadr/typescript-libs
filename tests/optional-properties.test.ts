import { Category, Product } from "../src/optional-properties";

it("Should return object from category and product", () => {
  const categories: Category = {
    id: "G-TRX2025",
    name: "Gadget",
  };
  const product: Product = {
    id: "SM-S20-TRX25",
    name: "Samsung S20",
    price: 20000000,
    category: categories,
    description: "HP Samsung keluaran terbaru tahun ini bosqqque",
  };
  console.info(categories);
  console.info(product);
});

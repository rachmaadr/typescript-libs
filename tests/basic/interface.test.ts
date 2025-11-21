import { Seller } from "../../src/basic/interface";

it("Should return object from Seller", () => {
  const seller: Seller = {
    id: 1,
    name: "Jhon Doe",
  };
  console.info(seller);
})
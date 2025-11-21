import { Customer, categoriesType } from "../../src/basic/dataEnum";

it("Should return data of customer", () => {
  const customer: Customer = {
    id: "2025-01",
    name: "Jhon Doe",
    type: categoriesType.SILVER,
    address: "Jalan Kanan Kiri Dot Com",
  };
  console.info(customer);
});

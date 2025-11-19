import { Users, UserCategory } from "./../src/read-only-properties";

it("Should return object from users with read only properties", () => {
  const user: Users = {
    nik: 983928392893829,
    name: "jhon doe",
    category: UserCategory.PLATINUM,
    nib: "Usahalancar2025",
    npwp: "Penghasilan lancar 2025",
  };
  expect(user.name).toBe("jhon doe");
  console.info(user);
});

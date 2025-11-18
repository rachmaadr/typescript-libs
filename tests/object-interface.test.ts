import { StringDictionary } from "../src/object-interface";

it("Should return object from StringDictionary", () => {
  const dictionary: StringDictionary = {
    id: "person1",
    name: "jhon doe",
    address: "jalan kalian",
  };
  expect(dictionary.id).toBe("person1");
  expect(dictionary.name).toBe("jhon doe");
  expect(dictionary.address).toBe("jalan kalian");
  console.info(dictionary);
});

import { stringArray } from "./../src/interface-array";

it("Should return array from stringArray", () => {
  const name: stringArray = ["jhon doe", "alice", "lorem ipsum"];
  expect(name).toEqual(["jhon doe", "alice", "lorem ipsum"]);
  console.info(name);
});

import data from "../src/dataArray";

describe("Data Array Test", (): void => {
  it("should return array from var name", function (): void {
    expect(data.names).toEqual(["jhon doe", "alice", "lorem ipsum"]);
  });

  it("should return array from var values", function (): void {
    const { values } = data;
    expect(values).toEqual([1, 2, 3, 4]);
  });

  it("should return of array with type read only from var hobbies", function (): void {
    const { hobbies } = data;
    expect(hobbies).toEqual(["Read", "Write"]);
  });

  it("Should return of array with criteria tuple and read only from var person", (): void => {
    expect(data.person).toEqual(["jhon doe", "Indonesia", 30]);
  });
});

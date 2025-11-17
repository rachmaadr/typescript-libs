import data from "../src/dataPrimitif";

describe("data primitif", () => {
  it("should return name as jhon doe", function (): void {
    const { name } = data;
    expect(name).toBe("jhon doe");
  });

  it("should return age of 30", function (): void {
    expect(data.age).toBe(30);
  });

  it("should return boolean value is true from variabel isMember", function (): void {
    const { isMember } = data;
    expect(isMember).toBe(true);
  });
});

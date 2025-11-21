import { sayHello } from "../../src/basic/sayHello";

describe("sayHello", ():void => {
  it("should return hello eko", (): void => {
    expect(sayHello('eko')).toBe('Hello eko')
  })
})
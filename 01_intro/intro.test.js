const { sum, nativeNull } = require("./intro");


describe("sum function", () => {

  test(" adds two numbers", () => {
    expect(sum(2, 3)).toBe(5);
    expect(sum(2, 3)).toEqual(5);
  });

  test("should return value correctly comparing to other", () => {
    expect(sum(4, 5)).toBeGreaterThan(8);
    expect(sum(4, 5)).toBeGreaterThanOrEqual(9);
    expect(sum(4, 5)).toBeLessThan(11);
  });

  test("Sum should sum two floating value correctly", () => {
    expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
  });
});


describe("NativeNul function", () => {

  test("should return false value null", () => {
    expect(nativeNull()).toBe(null);
    expect(nativeNull()).toBeNull();
    expect(nativeNull()).toBeFalsy();//undefined, null, 0, " ";
    expect(nativeNull()).toBeDefined();
    expect(nativeNull()).not.toBeTruthy();
    expect(nativeNull()).not.toBeUndefined();

  });
});
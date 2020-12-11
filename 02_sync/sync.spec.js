const Lodash = require("./sync");

const _ = new Lodash();

describe("Lodash:compact", () => {

  let array;

  //runs before Each of this tests;
  beforeEach(() => {
    array = [false, true, 9, 0, "hello", "", 0.5];
  });

  // beforeAll(() => { /runs once before All of this tests once/; });

  test("should be defined", () => {
    expect(_.compact).toBeDefined();
    expect(_.compact).not.toBeUndefined();
  });

  //fot testing beforeEach functionality(create new array for everyone of tests)
  test("should working array be editable", () => {
    array.push(...["one", "two"]);
    expect(array).toContain("one");
    expect(array).toContain("two");
  });

  test("should remove falsy values from array", () => {
    const result = [true, 9, "hello", 0.5];
    expect(_.compact(array)).toEqual(result);
  });

  test("should NOT contain falsy values", () => {
    expect(_.compact(array)).not.toContain("");
    expect(_.compact(array)).not.toContain(0);
    expect(_.compact(array)).not.toContain(false);
    expect(_.compact(array)).not.toContain(null);
  });
});


describe("Lodash:groupBy", () => {

  test("should be defined", () => {
    expect(_.groupBy).toBeDefined();
    expect(_.groupBy).not.toBeUndefined();
  });

  test("should group array items by Math.flour", () => {
    const array = [2.2, 2.4, 4.3, 5.0];
    const result = {
      2: [2.2, 2.4],
      4: [4.3],
      5: [5.0]
    };
    expect(_.groupBy(array, Math.floor)).toEqual(result);
  });

  test("should group array items length", () => {
    const array = ["one", "two", "three"];
    const result = {
      5: ["three"],
      3: ["one", "two"]
    };
    expect(_.groupBy(array, "length")).toEqual(result);
  });

  test("should NOT return array", () => {
    expect(_.groupBy([], Math.trunc)).not.toBeInstanceOf(Array);
  });
});
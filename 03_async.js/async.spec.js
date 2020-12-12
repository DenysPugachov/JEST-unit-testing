const Ajax = require("./async");

describe("Ajax: echo", () => {

  test("should return value async", async () => {
    const result = await Ajax.echo("Some data");
    expect(result).toBe("Some data");
  });

  test("should return promise", () => {
    return Ajax.echo("Some data").then(data =>
      expect(data).toBe("Some data"));
  });

  test("should catch error with promise", () => {
    return Ajax.echo().catch(err => {
      expect(err).toBeInstanceOf(Error);
    });
  });

  test("should catch error with async", async () => {
    try {
      await Ajax.echo();
    } catch (e) {
      expect(e.message).toBe("error");
    }
  });
});
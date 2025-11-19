const getMessage = require("../script");

test("message testing", () => {
    expect(getMessage()).toBe("Hello from JavaScript CI Pipeline!");
});

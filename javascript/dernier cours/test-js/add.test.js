const addNumbers = require("./add");

test("Additionne 2 nombres", () => {
  expect(addNumbers(2, 4)).toBe(6);
});

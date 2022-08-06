describe("value testing", () => {
    test("strings are string", () => {
      expect("Hello World").toBe("Hello World");
      expect(stringCheck("Hello")).toBeTruthy();
      expect(stringCheck("This is a sentence")).toBeTruthy();
      expect(stringCheck(5)).toBeFalsy();
    });
    test("numbers are numbers", () => {
      expect(3.14159).toBe(3.14159);
      expect(numberCheck(3.14159)).toBeTruthy();
      expect(numberCheck(2 + 2)).toBeTruthy();
      expect(numberCheck("5")).toBeFalsy();
    });
    test("booleans are booleans", () => {
      expect(false).toBe(false);
      expect(booleanCheck(true)).toBeTruthy();
      expect(booleanCheck(5 === 5)).toBeTruthy();
      expect(booleanCheck("word")).toBeFalsy();
    });
  });

  function numberCheck(x) {
    return typeof x == "number";
  }
  function stringCheck(x) {
    return typeof x == "string";
  }
  function booleanCheck(x) {
    return typeof x == "boolean";
  }
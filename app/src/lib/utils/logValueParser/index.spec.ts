import { logValueParser } from ".";

describe("when the value type is boolean", () => {
  it('returns "Yes" when the value is true', () => {
    expect(logValueParser(true)).toBe("Yes");
  });

  it('returns "No" when the value is false', () => {
    expect(logValueParser(false)).toBe("No");
  });
});

describe("when the value type is not boolean", () => {
  it("returns the same value", () => {
    expect(logValueParser("123")).toBe("123");
    expect(logValueParser("06:30")).toBe("06:30");
    expect(logValueParser("Some title")).toBe("Some title");
    expect(logValueParser('{ from: "", to: "" }')).toBe('{ from: "", to: "" }');
  });
});

import { formatTime } from ".";

it("formats the time correctly", () => {
  const time = "12:36:05:123";

  const result = formatTime(time);

  const expectedResult = "12:36";
  expect(expectedResult).toBe(result);
});

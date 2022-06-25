import { applySearchFilter } from ".";

const list = [
  { name: "João", age: 16 },
  { name: "Victor", age: 30 },
  { name: "Julia", age: 30 },
  { name: "Felipe", age: 20 },
  { name: "Juliana", age: 15 },
  { name: "Julio Silva", age: 15 },
];

it("returns the same list when the search is empty", () => {
  const result = applySearchFilter(list, ["someKey"], "");

  expect(result).toEqual(list);
});

it("returns the same list when the keys list is empty", () => {
  const result = applySearchFilter(list, [], "some text");

  expect(result).toEqual(list);
});

it("returns the expected list", () => {
  const result1 = applySearchFilter(list, ["name"], "j");

  expect(result1).toEqual([
    { name: "João", age: 16 },
    { name: "Julia", age: 30 },
    { name: "Juliana", age: 15 },
    { name: "Julio Silva", age: 15 },
  ]);

  const result2 = applySearchFilter(list, ["name", "age"], "30");

  expect(result2).toEqual([
    { name: "Victor", age: 30 },
    { name: "Julia", age: 30 },
  ]);
});

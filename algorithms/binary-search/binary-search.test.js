let binarySearch = require("./binary-search");

test("execute binary search on sorted arr and return index if found, -1 if not found", () => {
  const sortedArr = [1, 23, 45, 56, 66, 79, 100, 1000];
  expect(binarySearch(sortedArr, 52226)).toBe(-1);
  expect(binarySearch(sortedArr, 1000)).toBe(sortedArr.length - 1);
  expect(binarySearch(sortedArr, 1)).toBe(0);

  expect(binarySearch(["sdss", "dsds"], 45)).toBe(-1);
  expect(binarySearch(["sdss", "dsds"], "dsds")).toBe(1);
  expect(binarySearch(["sdss", "dsds"], "sdss")).toBe(0);
  expect(binarySearch([], "djsklhjdsl")).toBe(-1);
  expect(binarySearch([1], 1)).toBe(0);
});

import { insertionSort } from "./insertion-sort";
import { it, expect, describe } from "vitest";
it("selection sort nums array", () => {
  expect(
    insertionSort([321321, 3, 213, 21, 3, 1, 432, 5, 436, 546, 54, 2])
  ).toStrictEqual(
    [321321, 3, 213, 21, 3, 1, 432, 5, 436, 546, 54, 2].sort((a, b) => a - b)
  );
  expect(insertionSort([])).toStrictEqual([].sort((a, b) => a - b));
  expect(insertionSort([1])).toStrictEqual([1].sort((a, b) => a - b));
  expect(insertionSort([1, 2, 3, 4, 5])).toStrictEqual(
    [1, 2, 3, 4, 5].sort((a, b) => a - b)
  );
  expect(insertionSort([44, 2])).toStrictEqual([44, 2].sort((a, b) => a - b));
  expect(insertionSort([123, 120, 99, 87, 65, 31, 21, 10, 2])).toStrictEqual(
    [123, 120, 99, 87, 65, 31, 21, 10, 2].sort((a, b) => a - b)
  );
});

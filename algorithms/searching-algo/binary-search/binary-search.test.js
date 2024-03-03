import { binarySearch , binarySearchString} from "./binary-search";
import { it, expect, describe } from "vitest";

describe("binarySearch()", () => {
  it("takes a sorted numbers array and returns the index of the target element", () => {
    const sortedArr = [1, 23, 45, 56, 66, 79, 100, 1000];
    expect(binarySearch(sortedArr, 1000)).toBe(sortedArr.length - 1);
    expect(binarySearch(sortedArr, 1)).toBe(0);
    expect(binarySearch(["sdss", "dsds"], "dsds")).toBe(1);
    expect(binarySearch(["sdss", "dsds"], "sdss")).toBe(0);
    expect(binarySearch([1], 1)).toBe(0);
  });
  // it("takes a sorted numbers array and returns -1 if the target element is not found", () => {
  //   const sortedArr = [1, 23, 45, 56, 66, 79, 100, 1000];
  //   expect(binarySearch(sortedArr, 52226)).toBe(-1);
  //   expect(binarySearch(sortedArr, 0)).toBe(-1);
  //   expect(binarySearch(sortedArr, "word")).toBe(-1);
  //   expect(binarySearch(sortedArr, NaN)).toBe(-1);
  // });
});

//linear search on array - bog O of n
//builtin JS methods that use linear search = indexOf;  includes; find; findIndex

const linearSearch = function (arr, val) {
  let result = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      result = i;
      break;
    }
  }
  return result;
};

test("search for ion in [ana, ion, alin] and return 1", () => {
  let arrTest1 = ["ana", "ion", "alin"];
  const test1 = linearSearch(arrTest1, "ion");
  expect(test1).toBe(1);
  const arrTest2 = [2132, 321321, 421214, 515421, 421, 134, 421, 412, 4];
  expect(linearSearch(arrTest2, 421214)).toBe(2);
  expect(linearSearch(arrTest2, 22222)).toBe(-1);
  expect(linearSearch(arrTest2, 4)).toBe(8);
});

//binary search  - only on sorted arrays

const binarySearch = function (sortedArr, val) {
  if (sortedArr.length === 1) {
    if (sortedArr[0] === val) return 0;
    return -1;
  }
  let left = 0;
  let right = sortedArr.length - 1;
  let mid = Math.floor((left + right) / 2);
  while (left < right) {
    if (left === right - 1) {
      if (val === sortedArr[left]) return left;
      if (val === sortedArr[right]) return right;
      return -1;
    }
    if (val === sortedArr[mid]) return mid;
    if (val < sortedArr[mid]) {
      right = mid;
      mid = Math.floor((left + right) / 2);
    } else if (val > sortedArr[mid]) {
      left = mid;
      mid = Math.floor((left + right) / 2);
    }
  }
  return -1;
};

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

// KMP substring search
//Knuth–Morris–Pratt(KMP) Pattern Matching for strings
//  ---cam hardcore algoritmu asta

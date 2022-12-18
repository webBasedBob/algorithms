//built in array.sort JS method:
//based on unicode
//all array elements are converted to strings first and then sorted by unicode as strings
//
//
//
//bubblesort
// not the most efficient in most cases, but excels in some specific cases
//the specific case where it is quite good is when we have a already sorted array or a nearly sorted array

const bubbleSort = function (arr) {
  let noSwaps;
  for (let outer = arr.length - 1; outer >= 0; outer--) {
    noSwaps = true;
    for (let inner = 0; inner <= outer - 1; inner++) {
      if (arr[inner] > arr[inner + 1]) {
        [arr[inner], arr[inner + 1]] = [arr[inner + 1], arr[inner]];
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
};

test("bubble sort nums array", () => {
  expect(
    bubbleSort([321321, 3, 213, 21, 3, 1, 432, 5, 436, 546, 54, 2])
  ).toStrictEqual(
    [321321, 3, 213, 21, 3, 1, 432, 5, 436, 546, 54, 2].sort((a, b) => a - b)
  );
  expect(bubbleSort([])).toStrictEqual([].sort((a, b) => a - b));
  expect(bubbleSort([1])).toStrictEqual([1].sort((a, b) => a - b));
  expect(bubbleSort([1, 2, 3, 4, 5])).toStrictEqual(
    [1, 2, 3, 4, 5].sort((a, b) => a - b)
  );
  expect(bubbleSort([44, 2])).toStrictEqual([44, 2].sort((a, b) => a - b));
  expect(bubbleSort([123, 120, 99, 87, 65, 31, 21, 10, 2])).toStrictEqual(
    [123, 120, 99, 87, 65, 31, 21, 10, 2].sort((a, b) => a - b)
  );
});

//
//
//Selection sort
//is slightly better at performance than the bubble sort if we have a random integers arr
//but both have big o of n squared, the main difference between them in terms of performance
//is that selection sort is making nswaps, and bubble makes n squared swaps
//
//

const selectionSort = function (arr) {
  let left = 0;
  while (left < arr.length) {
    let min = Infinity;
    let minIndex;
    for (let i = left; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
        minIndex = i;
      }
    }
    [arr[left], arr[minIndex]] = [arr[minIndex], arr[left]];
    left++;
  }
  return arr;
};

test("selection sort nums array", () => {
  expect(
    selectionSort([321321, 3, 213, 21, 3, 1, 432, 5, 436, 546, 54, 2])
  ).toStrictEqual(
    [321321, 3, 213, 21, 3, 1, 432, 5, 436, 546, 54, 2].sort((a, b) => a - b)
  );
  expect(selectionSort([])).toStrictEqual([].sort((a, b) => a - b));
  expect(selectionSort([1])).toStrictEqual([1].sort((a, b) => a - b));
  expect(selectionSort([1, 2, 3, 4, 5])).toStrictEqual(
    [1, 2, 3, 4, 5].sort((a, b) => a - b)
  );
  expect(selectionSort([44, 2])).toStrictEqual([44, 2].sort((a, b) => a - b));
  expect(selectionSort([123, 120, 99, 87, 65, 31, 21, 10, 2])).toStrictEqual(
    [123, 120, 99, 87, 65, 31, 21, 10, 2].sort((a, b) => a - b)
  );
});

const insertionSort = function (arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    let j = i - 1;
    for (; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
};

test("selection sort nums array", () => {
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

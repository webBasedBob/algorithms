export const pivotHelper = (arr, start = 0, end = arr.length - 1) => {
  if (arr.length === 0) return undefined;
  if (
    !Array.isArray(arr) ||
    typeof start !== "number" ||
    typeof end !== "number"
  ) {
    throw new Error("inputs are of the wrong type");
  }
  let pivot = arr[start];
  let pivotIndex = start;
  for (let i = start; i <= end; i++) {
    if (pivot > arr[i]) {
      pivotIndex++;
      [arr[pivotIndex], arr[i]] = [arr[i], arr[pivotIndex]];
    }
  }
  [arr[pivotIndex], arr[start]] = [arr[start], arr[pivotIndex]];
  return pivotIndex;
};

export const quickSort = (arr, start = 0, end = arr.length - 1) => {
  if (arr.length <= 1) {
    return arr;
  }
  if (end - start < 1) {
    return;
  }
  let sortedElement = pivotHelper(arr, start, end);
  quickSort(arr, start, sortedElement - 1);
  quickSort(arr, sortedElement + 1, end);
  return arr;
};

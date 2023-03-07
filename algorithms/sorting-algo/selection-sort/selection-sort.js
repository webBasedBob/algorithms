//Selection sort
//is slightly better at performance than the bubble sort if we have a random integers arr
//but both have big o of n squared, the main difference between them in terms of performance
//is that selection sort is making nswaps, and bubble makes n squared swaps
//
//

export const selectionSort = function (arr) {
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

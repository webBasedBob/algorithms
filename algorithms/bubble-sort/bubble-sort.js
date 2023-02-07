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

module.exports = bubbleSort;

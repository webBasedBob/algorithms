//binary search  - only on sorted arrays

export const binarySearch = function (sortedArr, val) {
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

let arr1 = [1, 22, 344, 44123, 513213321, 66641244214];
let arr2 = [-2, 0, 1, 3, 5, 7, 321, 4124214, 1535344314, 414214124124124];
const arr3 = [4];
const arr4 = [-123];
export function merge(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr1)) {
    throw new Error("at least one of the inputs is not an array");
  }
  let pointerArr1 = 0;
  let pointerArr2 = 0;
  let result = [];
  while (arr1[pointerArr1] !== undefined && arr2[pointerArr2] !== undefined) {
    if (arr1[pointerArr1] < arr2[pointerArr2]) {
      result.push(arr1[pointerArr1]);
      pointerArr1++;
    } else if (arr1[pointerArr1] > arr2[pointerArr2]) {
      result.push(arr2[pointerArr2]);
      pointerArr2++;
    } else if (arr1[pointerArr1] === arr2[pointerArr2]) {
      result.push(arr1[pointerArr1]);
      result.push(arr2[pointerArr2]);
      pointerArr1++;
      pointerArr2++;
    }
  }
  if (arr1[pointerArr1] === undefined) {
    result.push(...arr2.slice(pointerArr2));
  }
  if (arr2[pointerArr2] === undefined) {
    result.push(...arr1.slice(pointerArr1));
  }
  return result;
}

export const mergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }
  let midPointIndex = Math.floor(arr.length / 2);
  let leftSide = arr.slice(0, midPointIndex);
  let rightSide = arr.slice(midPointIndex);
  return merge(mergeSort(leftSide), mergeSort(rightSide));
};

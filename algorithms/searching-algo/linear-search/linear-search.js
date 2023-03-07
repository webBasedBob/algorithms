//linear search on array - bog O of n
//builtin JS methods that use linear search = indexOf;  includes; find; findIndex

export const linearSearch = function (arr, val) {
  let result = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      result = i;
      break;
    }
  }
  return result;
};

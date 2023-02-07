//simplest  recursion exemple:

const countdownFrom = function (num) {
  if (num <= 0) {
    console.log("done");
    return;
  }
  console.log(num);
  num--;
  countdownFrom(num);
};

const sumRange = function (num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
};
console.log(sumRange(5)); //15

const factorial = function (num) {
  if (num === 1) {
    return 1;
  }
  return num * factorial(--num);
};

//
//
// HELPER METHOD RECURSION - DESIGN PATTERN
// when we create a function/ method and inside it we create another one,
//which is recursive and helps the outer one attain its purpose
//
//

const collectOddValues1 = function (arr) {
  let oddValsArr = [];

  const pushOddValsIntoResult = function (arr) {
    if (arr.length === 0) return;
    if (arr[0] % 2 !== 0) {
      oddValsArr.push(arr[0]);
    }
    pushOddValsIntoResult(arr.slice(1));
  };
  pushOddValsIntoResult(arr);
  return oddValsArr;
};

console.log(collectOddValues1([12, 2323, 4, 5, 6, 6, 87, 8, 32, 1]));

// the same function, but in a pure recursive function

const collectOddValues2 = function (arr) {
  if (arr.length === 0) return [];
  if (arr[0] % 2 === 0) return [...collectOddValues2(arr.slice(1))];
  if (arr[0] % 2 !== 0) return [arr[0], ...collectOddValues2(arr.slice(1))];
};
console.log(collectOddValues2([2, 4, 6, 1, 2, 3, 5, 7, 9, 11, 14, 15, 19]));

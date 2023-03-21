//this is not tested woth negative int also

export const getDigit = (num, place) => {
  const numStr = String(num);
  const computedIndex = numStr.length - 1 - place;
  let result = numStr[computedIndex];
  if (result && result !== "-") {
    return Number(result);
  } else {
    return 0;
  }
};

export const getDigitCount = (num) => {
  const numStr = String(num);
  return numStr.length;
};

export const getBiggestDigitCount = (numsArr) => {
  if (!Array.isArray(numsArr)) {
    throw new Error("input is not an array");
  }
  let result = 0;
  numsArr.forEach((num) => {
    result = Math.max(result, getDigitCount(num));
  });
  return result;
};

export const radixSort = (numsArr) => {
  let tempArr = [...numsArr];
  const maxDigits = getBiggestDigitCount(tempArr);

  for (let i = 0; i <= maxDigits; i++) {
    const base10hashTable = {};

    for (let base10int = 0; base10int < 10; base10int++) {
      base10hashTable[base10int] = [];
    }

    for (let inner = 0; inner < tempArr.length; inner++) {
      let currDigit = getDigit(tempArr[inner], i);
      base10hashTable[currDigit].push(tempArr[inner]);
    }

    tempArr = Object.values(base10hashTable).flat();
  }
  return tempArr;
};

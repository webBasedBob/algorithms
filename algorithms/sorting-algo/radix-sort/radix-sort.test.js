import { it, expect, describe } from "vitest";
import { getDigit, getBiggestDigitCount, radixSort } from "./radix-sort";

//Please note that the code is not created to work with negative numbers for now

describe("getDigit()", () => {
  it("should return the digit at a given place starting from the right - 0 indexed", () => {
    let num1 = 123;
    let num2 = 2;

    let result1 = getDigit(num1, 0);
    let result2 = getDigit(num1, 2);
    let result3 = getDigit(num2, 0);

    expect(result1).toBe(3);
    expect(result2).toBe(1);
    expect(result3).toBe(2);
  });
  it("should return zero if the the number is shorter than the required index", () => {
    let num1 = 123;

    let result1 = getDigit(num1, 3);

    expect(result1).toBe(0);
  });
  it("should work with negative numbers", () => {
    let num1 = -123;

    let result1 = getDigit(num1, 3);

    expect(result1).toBe(0);
  });
});

describe("getBiggestDigitCount()", () => {
  it("should return the biggest digit count in an array", () => {
    let numsArr1 = [123, 3213213, 21, 1];
    let numsArr2 = [1];
    let numsArr3 = [];

    let result1 = getBiggestDigitCount(numsArr1);
    let result2 = getBiggestDigitCount(numsArr2);
    let result3 = getBiggestDigitCount(numsArr3);

    expect(result1).toBe(7);
    expect(result2).toBe(1);
    expect(result3).toBe(0);
  });
});

describe("radixSort()", () => {
  it("should return a sorted copy of the positive int array", () => {
    const arr1 = [2, 1, 0];
    const arr2 = [0, 1, 2];

    const result1 = radixSort(arr1);
    const result2 = radixSort(arr2);

    expect(result1).toStrictEqual([0, 1, 2]);
    expect(result2).toStrictEqual([0, 1, 2]);
  });
  it("should sort 2 elements array", () => {
    const arr2 = [2, 1];

    const result2 = radixSort(arr2);

    expect(result2).toStrictEqual([1, 2]);
  });
  it("should sort one elemnt array", () => {
    const arr1 = [2];

    const result1 = radixSort(arr1);

    expect(result1).toStrictEqual([2]);
  });
  it("should return an empty array if the initial array is empty", () => {
    const arr1 = [];

    const result1 = radixSort(arr1);

    expect(result1).toStrictEqual([]);
  });
});

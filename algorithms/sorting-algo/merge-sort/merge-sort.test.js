import { it, describe, expect } from "vitest";
import { merge, mergeSort } from "./merge-sort";
describe("merge()", () => {
  it("takes 2 sorted int arrays and merges them in a sorted array", () => {
    let arr1 = [1, 22];
    let arr2 = [-2, 0, 1];
    let arr3 = [];
    let arr4 = [1];
    let arr5 = [1, 2, 3];
    let arr6 = [-12, -2, -1];

    let result1 = merge(arr1, arr2);
    let result2 = merge(arr3, arr4);
    let result3 = merge(arr5, arr6);

    expect(result1).toStrictEqual([-2, 0, 1, 1, 22]);
    expect(result2).toStrictEqual([1]);
    expect(result3).toStrictEqual([-12, -2, -1, 1, 2, 3]);
  });
  it("returns an empty arr if 2 empty arrays are passed as args", () => {
    let arr5 = [];
    let arr6 = [];
    let result3 = merge(arr5, arr6);
    expect(result3).toStrictEqual([]);
  });
  it("throws an error if inputs are not arrays", () => {
    let string = "string";
    let arr2 = [1, 2, 3];
    let object = { 0: 1, 1: 2, length: 2 };
    let number1 = 1;
    let number2 = 2;
    const expectedError1 = () => {
      let result = merge(string, arr2);
    };
    const expectedError2 = () => {
      let result = merge(object, arr2);
    };
    const expectedError3 = () => {
      let result = merge(number1, number2);
    };
    expect(expectedError1).toThrow();
    expect(expectedError2).toThrow();
    expect(expectedError3).toThrow();
  });
});

describe("mergeSort()", () => {
  it("takes an int array and sorts it ascending", () => {
    let arr = [1, 42, 3, 44, -1, 0];

    let result = mergeSort(arr);

    expect(result).toStrictEqual([-1, 0, 1, 3, 42, 44]);
  });
  it("handles edge cases - one element array, empty array", () => {
    let arr1 = [];
    let arr2 = [0];

    let result1 = mergeSort(arr1);
    let result2 = mergeSort(arr2);

    expect(result1).toStrictEqual([]);
    expect(result2).toStrictEqual([0]);
  });
  it("throws an error if inputs are not arrays", () => {
    //this might be redundant, it is already tested in above for the merge function
    let string = "string";
    let object = { 0: 1, 1: 2, length: 2 };
    let number1 = 1;
    const expectedError1 = () => {
      let result = mergeSort(string);
    };
    const expectedError2 = () => {
      let result = mergeSort(object);
    };
    const expectedError3 = () => {
      let result = mergeSort(number1);
    };
    expect(expectedError1).toThrow();
    expect(expectedError2).toThrow();
    expect(expectedError3).toThrow();
  });
});

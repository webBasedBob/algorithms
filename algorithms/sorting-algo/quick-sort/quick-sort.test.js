import { it, expect, describe } from "vitest";
import { pivotHelper, quickSort } from "./quick-sort";

describe("pivotHelper()", () => {
  it("should return the index the first element would have if the array was sorted", () => {
    const arr1 = [2, 1, 0];
    const arr2 = [0, 1, 2];

    const result1 = pivotHelper(arr1);
    const result2 = pivotHelper(arr2);

    expect(result1).toBe(2);
    expect(result2).toBe(0);
  });
  it("should work with 2 elements array", () => {
    const arr2 = [2, 1];

    const result2 = pivotHelper(arr2);

    expect(result2).toBe(1);
  });
  it("should work with one elemnt array", () => {
    const arr1 = [2];

    const result1 = pivotHelper(arr1);

    expect(result1).toBe(0);
  });
  it("should return undefined if the initial array is empty", () => {
    const arr1 = [];

    const result1 = pivotHelper(arr1);

    expect(result1).toBe(undefined);
  });
  it("should throw an error if the input is not an array", () => {
    const string = "string";
    const object = { key: "value" };
    const number = 123;
    const result1 = () => {
      pivotHelper(string);
    };
    const result2 = () => {
      pivotHelper(object);
    };
    const result3 = () => {
      pivotHelper(number);
    };

    expect(result1).toThrow();
    expect(result2).toThrow();
    expect(result3).toThrow();
  });
});

describe("mergeSort()", () => {
  it("should sort int array", () => {
    const arr1 = [2, 1, 0];
    const arr2 = [0, 1, 2];

    const result1 = quickSort(arr1);
    const result2 = quickSort(arr2);

    expect(result1).toStrictEqual([0, 1, 2]);
    expect(result2).toStrictEqual([0, 1, 2]);
  });
  it("should sort 2 elements array", () => {
    const arr2 = [2, 1];

    const result2 = quickSort(arr2);

    expect(result2).toStrictEqual([1, 2]);
  });
  it("should sort one elemnt array", () => {
    const arr1 = [2];

    const result1 = quickSort(arr1);

    expect(result1).toStrictEqual([2]);
  });
  it("should return an empty array if the initial array is empty", () => {
    const arr1 = [];

    const result1 = quickSort(arr1);

    expect(result1).toStrictEqual([]);
  });
  it("should throw an error if the input is not an array", () => {
    const string = "string";
    const object = { key: "value" };
    const number = 123;
    const result1 = () => {
      quickSort(string);
    };
    const result2 = () => {
      quickSort(object);
    };
    const result3 = () => {
      quickSort(number);
    };

    expect(result1).toThrow();
    expect(result2).toThrow();
    expect(result3).toThrow();
  });
});

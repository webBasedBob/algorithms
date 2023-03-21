import { it, expect, describe, beforeEach } from "vitest";
import { Node, Stack } from "./stack";
describe("Node()", () => {
  it("cretes a instance of Node class with the right value", () => {
    const value = 12;
    const newNode = new Node(value);
    expect(newNode.value).toBe(value);
  });
  it("cretes a instance of Node class with the next property pointing to null", () => {
    const value = 12;
    const newNode = new Node(value);
    expect(newNode.next).toBe(null);
  });
});

describe("Stack()", () => {
  it("cretes a instance of Node class with the first and last properties pointing to null", () => {
    const stack = new Stack();
    expect(stack.start).toBe(null);
    expect(stack.end).toBe(null);
  });
  it("cretes a instance of Node class with the size of 0", () => {
    const stack = new Stack();
    expect(stack.size).toBe(0);
  });
  it("cretes a instance of Node class with the size of 0", () => {
    const stack = new Stack();
    expect(stack.size).toBe(0);
  });
});

describe("Stack.push()", () => {
  it("returns undefined if no argument/undefined/null  is passed", () => {
    const stack = new Stack();

    const result1 = stack.push();
    expect(result1).toBe(undefined);

    const result2 = stack.push(undefined);
    expect(result2).toBe(undefined);

    const result3 = stack.push(null);
    expect(result3).toBe(undefined);
  });
  it("does not change the size of stack if no argument/undefined/null  is passed", () => {
    const stack = new Stack();

    stack.push();
    stack.push(undefined);
    stack.push(null);

    expect(stack.size).toBe(0);
  });
  it("pushes the value as a new node", () => {
    const stack = new Stack();

    stack.push(12);
    expect(stack.start instanceof Node).toBe(true);
  });
  it("pushes node at the start of the stack", () => {
    const stack = new Stack();

    stack.push(12);
    expect(stack.start.value).toBe(12);

    stack.push(112);
    expect(stack.start.value).toBe(112);

    stack.push(0);
    expect(stack.start.value).toBe(0);
  });
  it("returns the correct stack size after each push", () => {
    const stack = new Stack();

    stack.push(12);
    expect(stack.size).toBe(1);

    stack.push(112);
    expect(stack.size).toBe(2);

    stack.push(0);

    expect(stack.size).toBe(3);
  });
});
let stack;
let first = 12;
let second = 112;
let third = 0;
describe("Stack.push()", () => {
  beforeEach(() => {
    stack = new Stack();
    stack.push(first);
    stack.push(second);
    stack.push(third);
  });
  it("deletes first node", () => {
    stack.pop();
    expect(stack.start.value).not.toBe(first);
    expect(stack.start.value).toBe(second);
  });
  it("returns the correct stack size after each pop", () => {
    stack.pop();
    expect(stack.size).toBe(2);
    stack.pop();
    expect(stack.size).toBe(1);
    stack.pop();
    expect(stack.size).toBe(0);
  });
  it("returns undefined if stack is already empty", () => {
    stack.pop();
    stack.pop();
    stack.pop();
    const result = stack.pop();
    expect(result).toBe(undefined);
  });
});

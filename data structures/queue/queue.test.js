import { it, expect, describe, beforeEach } from "vitest";
import { Node, Queue } from "./queue";
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

describe("Queue()", () => {
  it("creates a instance of Queue class with the first and last properties pointing to null", () => {
    const queue = new Queue();
    expect(queue.start).toBe(null);
    expect(queue.end).toBe(null);
  });
  it("creates a instance of Queue class with the size of 0", () => {
    const queue = new Queue();
    expect(queue.size).toBe(0);
  });
});

describe("Queue.enqueue()", () => {
  it("returns undefined if no argument/undefined/null  is passed", () => {
    const queue = new Queue();

    const result1 = queue.enqueue();
    expect(result1).toBe(undefined);

    const result2 = queue.enqueue(undefined);
    expect(result2).toBe(undefined);

    const result3 = queue.enqueue(null);
    expect(result3).toBe(undefined);
  });
  it("does not change the size of queue if no argument/undefined/null  is passed", () => {
    const queue = new Queue();

    queue.enqueue();
    queue.enqueue(undefined);
    queue.enqueue(null);

    expect(queue.size).toBe(0);
  });
  it("enqueuees the value as a new node", () => {
    const queue = new Queue();

    queue.enqueue(12);
    expect(queue.start instanceof Node).toBe(true);
  });
  it("enqueuees node at the end of the queue", () => {
    const queue = new Queue();

    queue.enqueue(12);
    expect(queue.end.value).toBe(12);

    queue.enqueue(112);
    expect(queue.end.value).toBe(112);

    queue.enqueue(0);
    expect(queue.end.value).toBe(0);
  });
  it("returns the correct queue size after each enqueue", () => {
    const queue = new Queue();

    queue.enqueue(12);
    expect(queue.size).toBe(1);

    queue.enqueue(112);
    expect(queue.size).toBe(2);

    queue.enqueue(0);

    expect(queue.size).toBe(3);
  });
});
let queue;
let first = 12;
let second = 112;
let third = 0;
describe("Queue.enqueue()", () => {
  beforeEach(() => {
    queue = new Queue();
    queue.enqueue(first);
    queue.enqueue(second);
    queue.enqueue(third);
  });
  it("deletes first node", () => {
    queue.dequeue();
    expect(queue.start.value).not.toBe(first);
    expect(queue.start.value).toBe(second);
  });
  it("returns the correct queue size after each dequeue", () => {
    queue.dequeue();
    expect(queue.size).toBe(2);
    queue.dequeue();
    expect(queue.size).toBe(1);
    queue.dequeue();
    expect(queue.size).toBe(0);
  });
  it("returns undefined if queue is already empty", () => {
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    const result = queue.dequeue();
    expect(result).toBe(undefined);
  });
});

export class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export class Queue {
  constructor() {
    this.start = null;
    this.end = null;
    this.size = 0;
  }
  enqueue(value) {
    if (value === undefined || value === null) {
      return undefined;
    }
    const newNode = new Node(value);
    if (this.size === 0) {
      this.start = newNode;
      this.end = newNode;
    } else {
      this.end.next = newNode;
      this.end = this.end.next;
    }
    return ++this.size;
  }
  dequeue() {
    if (this.size === 0) {
      return undefined;
    }
    if (this.size === 1) {
      this.start = this.end = null;
    } else {
      this.start = this.start.next;
    }
    return --this.size;
  }
}

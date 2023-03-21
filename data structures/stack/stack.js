export class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export class Stack {
  constructor() {
    this.start = null;
    this.end = null;
    this.size = 0;
  }
  push(value) {
    if (value === undefined || value === null) {
      return undefined;
    }
    const newNode = new Node(value);
    if (this.size === 0) {
      this.start = newNode;
      this.end = newNode;
    } else {
      const temp = this.start;
      this.start = newNode;
      this.start.next = temp;
    }
    return ++this.size;
  }
  pop() {
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

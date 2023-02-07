"use strict";

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    //push a new node at the end/tail of the linked list
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = this.tail.next; //he put newNode here
    }
    this.length++;
    return this;
  }
  pop() {
    //delete and return last node of the linked list (the tail)
    if (!this.tail) return undefined;
    let nodeToPop = this.tail;
    this.tail = this.tail.prev;
    this.tail.next = null;
    this.length--;
    return nodeToPop;
  }
  shift() {
    //deletes and returns the head
    if (!this.head) return undefined;
    let nodeToShift = this.head;
    if (this.length === 1) {
      this.head = this.tail = null;
      this.length = 0;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      this.length--;
    }
    return nodeToShift;
  }
  unshift(val) {
    //inserts a node at the beginning of the list
    if (!this.head) this.push(val);
    let newNode = new Node(val);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
    return this;
  }
  get(index) {
    if (index >= this.length || index < 0) return undefined;
    let counter = 0;
    let nodeToReturn = this.head;
    while (counter < index) {
      nodeToReturn = nodeToReturn.next;
      counter++;
    }
    return nodeToReturn || undefined;
  }
  // implemented a different set method of the one in the course
  //mine sets an node at index X , shifting the nodes after it, not replacing the node an index X

  insert(index, val) {
    if (index >= this.length || index < 0) return undefined;
    if (index === 0) {
      this.unshift(val);
      return this;
    }
    if (index === this.length) {
      this.push(val);
      return this;
    }
    let rightNode = this.get(index - 1);
    let nodeToInsert = new Node(val);
    nodeToInsert.next = rightNode.next;
    nodeToInsert.prev = rightNode;
    rightNode.next == nodeToInsert;
    nodeToInsert.next.prev = nodeToInsert;
    this.length++;
    return this;
  }
  //the get from the course:
  set(index, val) {
    let nodeToUpdate = this.get(index);
    if (!nodeToUpdate) return false;
    nodeToUpdate.value = val;
    return true;
  }
  delete(index) {
    if (index >= this.length) return false;
    if (index === this.length - 1) this.pop();
    if (index === 0) this.shift();
    let rightNode = this.get(index - 1);
    rightNode.next = rightNode.next.next;
    rightNode.next.prev = rightNode;
    return this;
  }
  displayForward() {
    let curNode = this.head;
    while (curNode) {
      console.log(curNode.val);
      curNode = curNode.next;
    }
  }
  buildArray() {
    let curNode = this.head;
    let result = [];
    while (curNode) {
      result.push(curNode.val);
      curNode = curNode.next;
    }
    return result;
  }
}

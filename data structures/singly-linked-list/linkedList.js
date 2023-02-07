"use strict";

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class SinglyLinkedList {
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
      this.tail.next = newNode;
      this.tail = this.tail.next; //he put newNode here
    }
    this.length++;
    return this;
  }
  pop() {
    //delete and return last node of the linked list (the tail)
    if (!this.head) return undefined;
    //go through the list
    let curNode = this.head;
    //if list has only one item
    if (this.length === 1) {
      this.head = this.tail = null;
      this.length = 0;
      return curNode;
    } else {
      while (curNode.next.next) {
        curNode = curNode.next;
      }
      let lastNode = curNode.next;
      this.tail = curNode;
      curNode.next = null;
      this.length--;
      return lastNode;
    }
  }
  shift() {
    //deletes and returns the head
    if (!this.head) return undefined;
    let nodeToReturn = this.head;
    if (this.length === 1) {
      this.head = this.tail = null;
      this.length = 0;
    } else {
      this.head = this.head.next;
      this.length--;
    }
    return nodeToReturn;
  }
  unshift(val) {
    //inserts a node at the beginning of the list
    if (!this.head) this.push(val);
    let newNode = new Node(val);
    newNode.next = this.head;
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
    rightNode.next == nodeToInsert;
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
    return this;
  }
}

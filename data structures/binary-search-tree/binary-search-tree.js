class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(val) {
    const nodeToInsert = new Node(val);
    if (!this.root) {
      this.root = nodeToInsert;
      return;
    }
    let currNode = this.root;
    while (true) {
      if (nodeToInsert.val < currNode.val) {
        if (currNode.left) {
          currNode = currNode.left;
          continue;
        } else {
          currNode.left = nodeToInsert;
          break;
        }
      }
      if (nodeToInsert.val > currNode.val) {
        if (currNode.right) {
          currNode = currNode.right;
          continue;
        } else {
          currNode.right = nodeToInsert;
          break;
        }
      }
      break;
    }
    return this;
  }
  find(val) {
    let currNode = this.root;
    if (!currNode) return false;
    while (currNode) {
      if (currNode.val === val) return true;
      if (val < currNode.val) {
        currNode = currNode.left;
      } else {
        currNode = currNode.right;
      }
    }
    return false;
  }
}

module.exports = BinarySearchTree;

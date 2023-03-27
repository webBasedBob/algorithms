const BinarySearchTree = require("./../binary-search-tree");

const breadthFirstSearch = (tree) => {
  const queue = [];
  const visitedValues = [];
  queue.push(tree.root);
  while (queue.length > 0) {
    const currentNode = queue.shift();
    visitedValues.push(currentNode.val);
    if (currentNode.left) {
      queue.push(currentNode.left);
    }
    if (currentNode.right) {
      queue.push(currentNode.right);
    }
  }
  return visitedValues;
};

const BinarySearchTreeInstance = new BinarySearchTree();
BinarySearchTreeInstance.insert(5);
BinarySearchTreeInstance.insert(2);
BinarySearchTreeInstance.insert(6);
BinarySearchTreeInstance.insert(1);
BinarySearchTreeInstance.insert(3);
BinarySearchTreeInstance.insert(8);
BinarySearchTreeInstance.insert(10);

console.log(breadthFirstSearch(BinarySearchTreeInstance));

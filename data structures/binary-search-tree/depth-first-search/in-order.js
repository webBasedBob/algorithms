const BinarySearchTree = require("./../binary-search-tree");

const preOrderDFS = (tree) => {
  const visitedValues = [];
  const startingNode = tree.root;
  const traverse = (node) => {
    if (node.left) {
      traverse(node.left);
    }
    visitedValues.push(node.val);
    if (node.right) {
      traverse(node.right);
    }
  };
  traverse(startingNode);
  return visitedValues;
};

const BinarySearchTreeInstance = new BinarySearchTree();
BinarySearchTreeInstance.insert(5);
BinarySearchTreeInstance.insert(2);
BinarySearchTreeInstance.insert(7);
BinarySearchTreeInstance.insert(6);
BinarySearchTreeInstance.insert(1);
BinarySearchTreeInstance.insert(3);
BinarySearchTreeInstance.insert(8);

//           5
//     2         7
//   1   3    6      8

console.log(preOrderDFS(BinarySearchTreeInstance));

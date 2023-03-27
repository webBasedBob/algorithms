class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class MinBinaryHeap {
  constructor() {
    this.values = [];
  }
  swipeNodes(childIndex, parentIndex) {
    [this.values[childIndex], this.values[parentIndex]] = [
      this.values[parentIndex],
      this.values[childIndex],
    ];
  }
  nodeHasPriority(targetNode, comparisonNode) {
    return (
      this.values[targetNode]?.priority < this.values[comparisonNode]?.priority
    );
  }
  enqueue(node) {
    this.values.push(node);

    let childIndex = this.values.length - 1;
    let parentIndex = Math.floor((childIndex - 1) / 2);

    while (this.nodeHasPriority(childIndex, parentIndex)) {
      this.swipeNodes(childIndex, parentIndex);
      childIndex = parentIndex;
      parentIndex = Math.floor((childIndex - 1) / 2);
    }
    return this.values;
  }
  dequeue() {
    this.swipeNodes(0, this.values.length - 1);
    const root = this.values.pop();

    let parentIndex = 0;
    let leftChildIndex;
    let rightChildIndex;

    const setChildrenIndeces = () => {
      leftChildIndex = parentIndex * 2 + 1;
      rightChildIndex = parentIndex * 2 + 2;
    };

    setChildrenIndeces();

    while (true) {
      if (
        this.nodeHasPriority(parentIndex, leftChildIndex) &&
        this.nodeHasPriority(parentIndex, rightChildIndex)
      ) {
        break;
      } else if (this.nodeHasPriority(leftChildIndex, rightChildIndex)) {
        this.swipeNodes(leftChildIndex, parentIndex);
        parentIndex = leftChildIndex;
        setChildrenIndeces();
      } else if (this.nodeHasPriority(rightChildIndex, leftChildIndex)) {
        this.swipeNodes(rightChildIndex, parentIndex);
        parentIndex = rightChildIndex;
        setChildrenIndeces();
      } else {
        break;
      }
    }
    return root;
  }
}

const pula = new MinBinaryHeap();
pula.enqueue(new Node("12", 12));
pula.enqueue(new Node("122", 122));
pula.enqueue(new Node("2", 2));
pula.enqueue(new Node("50", 50));
pula.enqueue(new Node("10000", 10000));
pula.enqueue(new Node("1", 1));
//expected:
//         1000
//   122         12
// 2    50
console.log(pula.values);

pula.dequeue();
console.log(pula.values);

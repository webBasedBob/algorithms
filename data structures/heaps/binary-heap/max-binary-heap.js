class MinBinaryHeap {
  constructor() {
    this.values = [];
  }
  swipeValues(childIndex, parentIndex) {
    [this.values[childIndex], this.values[parentIndex]] = [
      this.values[parentIndex],
      this.values[childIndex],
    ];
  }
  valueIsBigger(targetValue, comparisonValue) {
    return this.values[targetValue] > this.values[comparisonValue];
  }
  insert(value) {
    this.values.push(value);

    let childIndex = this.values.length - 1;
    let parentIndex = Math.floor((childIndex - 1) / 2);

    while (this.valueIsBigger(childIndex, parentIndex)) {
      this.swipeValues(childIndex, parentIndex);
      childIndex = parentIndex;
      parentIndex = Math.floor((childIndex - 1) / 2);
    }
    return this.values;
  }
  deleteroot() {
    this.swipeValues(0, this.values.length - 1);
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
        this.valueIsBigger(parentIndex, leftChildIndex) &&
        this.valueIsBigger(parentIndex, rightChildIndex)
      ) {
        break;
      } else if (this.valueIsBigger(leftChildIndex, rightChildIndex)) {
        this.swipeValues(leftChildIndex, parentIndex);
        parentIndex = leftChildIndex;
        setChildrenIndeces();
      } else if (this.valueIsBigger(rightChildIndex, leftChildIndex)) {
        this.swipeValues(rightChildIndex, parentIndex);
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
pula.insert(new Node("12", 12));
pula.insert(new Node("122", 122));
pula.insert(new Node("2", 2));
pula.insert(new Node("50", 50));
pula.insert(new Node("10000", 10000));
pula.insert(new Node("1", 1));
//expected:
//         1000
//   122         12
// 2    50
console.log(pula.values);

pula.deleteroot();
console.log(pula.values);

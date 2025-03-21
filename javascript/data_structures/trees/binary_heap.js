// Binary Heap

class BinaryHeap {
  constructor() {
    this.array = [41, 39, 33, 18, 27, 12];
  }
  insert(value) {
    this.array.push(value);
    this.bubbleUp();
  }
  bubbleUp() {
    let elementId = this.array.length - 1;
    let element = this.array[elementId];
    while (elementId) {
      let parentId = Math.floor((elementId - 1) / 2);
      let parent = this.array[parentId];
      if (element <= parent) break;
      this.array[elementId] = parent;
      this.array[parentId] = element;
      elementId = parentId;
    }
    return console.log(this.array);
  }
  extractMax() {
    let max = this.array[0];
    let end = this.array.pop();
    if (this.array.length > 0) {
      this.array[0] = end;
      this.sinkDown();
    }
    return console.log(max);
  }
  sinkDown() {
    let elementId = 0;
    let length = this.array.length;
    let element = this.array[0];
    while (true) {
      let leftChildId = 2 * elementId + 1;
      let rightChildId = 2 * elementId + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildId < length) {
        leftChild = this.array[leftChildId];
        if (leftChild > element) {
          swap = leftChildId;
        }
      }
      if (rightChildId < length) {
        rightChild = this.array[leftChildId];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildId;
        }
      }
      if (swap === null) break;
      this.array[elementId] = this.array[swap];
      this.array[swap] = element;
      elementId = swap;
    }
  }
}

const BH = new BinaryHeap();
BH.insert(55); //Inserts 55 to the Binary Heap
BH.extractMax(); //Extracts the Root Node
BH.extractMax(); //Extracts the Root Node

/**
 * Max Binary Heap Data Structure Implementation
 * 
 * A Binary Heap is a specialized tree-based data structure that satisfies the heap property.
 * In a max heap, for any given node N, the value of N is greater than or equal to the values of its children.
 * 
 * Key characteristics:
 * - Complete binary tree structure
 * - Parent nodes are always larger than their children
 * - Root node contains the maximum value
 * - O(log n) insertion and deletion operations
 * - O(1) access to maximum element
 * - Efficient priority queue implementation
 * 
 * Common use cases:
 * - Priority queues
 * - Heap sort algorithm
 * - Graph algorithms (Dijkstra's, Prim's)
 * - Event-driven simulation
 * - Task scheduling
 * - Memory management
 * 
 * Operations:
 * - insert: Add a new element to the heap
 * - extractMax: Remove and return the maximum element
 * - peek: View the maximum element without removing it
 * - buildHeap: Convert an array into a heap
 * - isEmpty: Check if the heap is empty
 * - size: Get the number of elements in the heap
 * 
 * Time Complexity:
 * - Insert: O(log n)
 * - ExtractMax: O(log n)
 * - Peek: O(1)
 * - BuildHeap: O(n)
 * - isEmpty: O(1)
 * - size: O(1)
 * 
 * Space Complexity: O(n) where n is the number of elements
 * 
 * Note: This implementation uses an array to store the heap elements,
 * where for any index i:
 * - Parent index: Math.floor((i-1)/2)
 * - Left child index: 2i + 1
 * - Right child index: 2i + 2
 */

class BinaryHeap {
  constructor() {
    this.array = [];
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
  }

  extractMax() {
    if (this.isEmpty()) return null;
    let max = this.array[0];
    let end = this.array.pop();
    if (this.array.length > 0) {
      this.array[0] = end;
      this.sinkDown();
    }
    return max;
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
        rightChild = this.array[rightChildId];
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

  peek() {
    return this.array[0] || null;
  }

  isEmpty() {
    return this.array.length === 0;
  }

  size() {
    return this.array.length;
  }

  buildHeap(arr) {
    this.array = arr;
    for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
      this.sinkDown(i);
    }
  }

  printHeap() {
    console.log(this.array);
  }
}

// Example usage
const heap = new BinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
console.log("Initial heap:");
heap.printHeap();
console.log("Max value:", heap.peek());
console.log("Extracted max:", heap.extractMax());
console.log("Heap after extraction:");
heap.printHeap();
console.log("Heap size:", heap.size());
console.log("Is empty:", heap.isEmpty());

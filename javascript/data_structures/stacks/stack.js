/**
 * Stack Data Structure Implementation
 * 
 * A Stack is a linear data structure that follows the Last-In-First-Out (LIFO) principle.
 * The last element added to the stack will be the first one to be removed.
 * 
 * Key characteristics:
 * - LIFO (Last-In-First-Out) principle
 * - Dynamic size
 * - Single-ended operations (top only)
 * - No random access to elements
 * - Memory efficient
 * - Fast operations
 * 
 * Common use cases:
 * - Function call stack in programming languages
 * - Undo/Redo operations in text editors
 * - Backtracking algorithms
 * - Expression evaluation and syntax parsing
 * - Browser history navigation
 * - Memory management
 * 
 * Operations:
 * - push: Add an element to the top of the stack
 * - pop: Remove and return the top element
 * - peek: View the top element without removing it
 * 
 * Time Complexity:
 * - Push: O(1)
 * - Pop: O(1)
 * - Peek: O(1)
 * 
 * Space Complexity: O(n) where n is the number of elements
 * 
 * Note: This implementation uses a linked list structure where each node
 * contains a value and a reference to the next node in the stack.
 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  printList() {
    let array = [];
    let currentNode = this.top;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return console.log(array);
  }

  peek() {
    return console.log(this.top.value);
  }

  push(value) {
    let newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;
    return this.printList();
  }

  pop() {
    if (!this.top) {
      return null;
    }
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    let temp = this.top.next;
    this.top = temp;
    this.length--;
    return this.printList();
  }
}

const stack = new Stack();
stack.push("google"); //Inserts google to the Stack
stack.push("instagram"); //Inserts instagram to the Stack
stack.push("discord"); //Inserts discord to the Stack
stack.push("twitter"); //Inserts twitter to the Stack
stack.pop(); //Removes the top Node
stack.peek(); //Displays the top Node

/**
 * Implementation of a Stack data structure (LIFO - Last In First Out).
 * Operations include: push, pop, peek.
 * Time Complexity: O(1) for all operations
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

  peak() {
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
stack.peak(); //Displays the top Node

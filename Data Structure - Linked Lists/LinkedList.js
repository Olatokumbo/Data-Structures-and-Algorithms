class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  printList() {
    let array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return console.log(array);
  }
  append(value) {
    let newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this.printList();
  }
  prepend(value) {
    let newNode = new Node(value);
    let temp = this.head;
    this.head = newNode;
    this.head.next = temp;
    this.length++;
    return this.printList();
  }
  insert(index, value) {
    let newNode = new Node(value);
    if (index >= this.length) {
      return this.append(value);
    } else if (index <= 0) {
      return this.prepend(value);
    } else {
      let leader = this.traverseToIndex(index - 1);
      let pointer = leader.next;
      leader.next = newNode;
      newNode.next = pointer;
    }
    this.length++;
    return this.printList();
  }
  traverseToIndex(index) {
    let currentNode = this.head;
    let counter = 0;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
}

const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.prepend(0);
list.insert(0, -1);

/**
 * Singly Linked List Data Structure Implementation
 * 
 * A Linked List is a linear data structure where elements are stored in nodes, and each node points to the next node in the sequence.
 * Unlike arrays, linked lists are not stored in contiguous memory locations.
 * 
 * Key characteristics:
 * - Dynamic size
 * - Non-contiguous memory allocation
 * - Sequential access only
 * - No random access to elements
 * - Memory efficient for dynamic data
 * - Easy insertion and deletion
 * 
 * Common use cases:
 * - Dynamic memory allocation
 * - Implementation of stacks and queues
 * - Browser history navigation
 * - Text editor undo/redo functionality
 * - Memory management in operating systems
 * - Implementation of adjacency lists for graphs
 * 
 * Operations:
 * - append: Add an element at the end
 * - prepend: Add an element at the beginning
 * - insert: Add an element at a specific position
 * - remove: Remove an element from a specific position
 * - removeHead: Remove the first element
 * - removeTail: Remove the last element
 * - traverseToIndex: Access an element at a specific position
 * 
 * Time Complexity:
 * - Append: O(1)
 * - Prepend: O(1)
 * - Insert: O(n)
 * - Remove: O(n)
 * - RemoveHead: O(1)
 * - RemoveTail: O(n)
 * - Access by index: O(n)
 * - Search: O(n)
 * 
 * Space Complexity: O(n) where n is the number of elements in the list
 * 
 * Note: This implementation maintains references to both head and tail nodes
 * for efficient append and prepend operations.
 */

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

  remove(index) {
    if (index >= this.length) {
      this.removeTail();
    } else if (index <= 0) {
      this.removeHead();
    } else {
      let leader = this.traverseToIndex(index - 1);
      let unwantedNode = leader.next;
      leader.next = unwantedNode.next;
      this.length--;
      return this.printList();
    }
  }

  removeHead() {
    let currentNode = this.head;
    this.head = currentNode.next;
    this.length--;
    return this.printList();
  }

  removeTail() {
    let leader = this.traverseToIndex(this.length - 2);
    leader.next = null;
    this.length--;
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
list.append(1); //Inserts 1 to the end of the Linked List
list.append(2); //Inserts 2 to the end  the Linked List
list.append(3); //Inserts 3 to the start  the Linked List
list.prepend(0); //Inserts 0 to the start  the Linked List
list.insert(0, -1); //Inserts -1 to at index 0 of the the Linked List
list.removeHead(); //Removes Head Node
list.removeTail(); //Removes Tail Node
list.remove(2); //Removes Node at index 2

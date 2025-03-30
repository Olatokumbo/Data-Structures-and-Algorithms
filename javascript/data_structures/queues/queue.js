/**
 * Queue Data Structure Implementation
 * 
 * A Queue is a linear data structure that follows the First-In-First-Out (FIFO) principle.
 * The first element added to the queue will be the first one to be removed.
 * 
 * Key characteristics:
 * - FIFO (First-In-First-Out) principle
 * - Dynamic size
 * - Two-ended operations (front and rear)
 * - No random access to elements
 * - Maintains order of elements
 * - Memory efficient
 * 
 * Common use cases:
 * - Print job scheduling
 * - Task scheduling in operating systems
 * - Call center phone systems
 * - Breadth-first search in graphs
 * - Buffer management in network protocols
 * - Event handling in real-time systems
 * 
 * Operations:
 * - enqueue: Add an element to the rear of the queue
 * - dequeue: Remove and return the front element
 * - peek: View the front element without removing it
 * - isEmpty: Check if the queue is empty
 * - size: Get the number of elements in the queue
 * 
 * Time Complexity:
 * - Enqueue: O(1)
 * - Dequeue: O(1)
 * - Peek: O(1)
 * - isEmpty: O(1)
 * - size: O(1)
 * 
 * Space Complexity: O(n) where n is the number of elements
 * 
 * Note: This implementation uses a linked list structure where each node
 * contains a value and a reference to the next node in the queue.
 * The queue maintains references to both the first and last nodes for
 * efficient enqueue and dequeue operations.
 */

class Node {
    constructor(value){
        this.value=value;
        this.next = null;
    }
}
class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.length=0;
    }

    printList() {
        let array = [];
        let currentNode = this.first;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return console.log(array);
    }

    peak(){
        return console.log(this.first.value)
    }

    enqueue(value){
        let newNode = new Node(value);
        if(this.length===0){
            this.first = newNode;
            this.last = newNode;
        }
        else{
            this.last.next =newNode;
            this.last = newNode
        }
        this.length++;
        return this.printList();
    }

    dequeue(){
        if(!this.first){
            return null
        }
        if(this.first===this.last){
            this.last =null
        }
        this.first =this.first.next
        this.length--;
        return this.printList();
    }
}

const queue = new Queue();
queue.enqueue("apple"); //Inserts apple to the Queue
queue.enqueue("orange"); //Inserts orange to the Queue
queue.enqueue("banana");//Inserts banana to the Queue
queue.enqueue("kiwi"); ////Inserts kiwi to the Queue
queue.peak(); //Displays the first Node
queue.dequeue(); //Removes the first Node
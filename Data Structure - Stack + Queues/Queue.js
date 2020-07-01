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
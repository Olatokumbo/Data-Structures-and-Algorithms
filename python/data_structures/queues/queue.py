"""
Queue Data Structure Implementation

A Queue is a linear data structure that follows the First-In-First-Out (FIFO) principle.
The first element added to the queue will be the first one to be removed.

Key characteristics:
- FIFO (First-In-First-Out) principle
- Dynamic size
- Two-ended operations (front and rear)
- No random access to elements
- Maintains order of elements

Common use cases:
- Print job scheduling
- Task scheduling in operating systems
- Call center phone systems
- Breadth-first search in graphs
- Buffer management in network protocols
- Event handling in real-time systems

Operations:
- enqueue: Add an element to the rear of the queue
- dequeue: Remove and return the front element
- peek: View the front element without removing it
- isEmpty: Check if the queue is empty
- size: Get the number of elements in the queue

Time Complexity:
- Enqueue: O(1)
- Dequeue: O(1)
- Peek: O(1)
- isEmpty: O(1)
- size: O(1)

Space Complexity: O(n) where n is the number of elements in the queue
"""

class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

class Queue:
    def __init__(self):
        self.first = None
        self.last = None
        self.length = 0
    
    def printList(self):
        node = self.first
        nums = []
        while(node):
            nums.append(node.value)
            node = node.next
        print(nums)
            
    def peak(self):
        if (self.first):
            return print(self.first.value)
        
    def enqueue(self, value):
        node = Node(value)
        if(self.first is None):
            self.first = node
            self.last = node
        else:
            self.last.next = node
            self.last = node
        self.length+=1
            
    def dequeue(self):
        if(self.first is None):
            return None
        else:
            self.first = self.first.next
            self.length-=1
        
queue = Queue()
queue.enqueue("apple") 
queue.enqueue("orange")
queue.enqueue("banana")
queue.enqueue("kiwi")
queue.peak()
queue.dequeue()
queue.printList()
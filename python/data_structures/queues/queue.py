"""
Implementation of a Queue data structure with basic operations.
Operations include: enqueue, dequeue, peek
Time Complexity: O(1) for all operations
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
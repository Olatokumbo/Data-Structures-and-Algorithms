"""
Implementation of a Stack data structure with basic operations.
Operations include: push, pop, peek
Time Complexity: O(1) for all operations
"""

class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

class Stack:
    def __init__(self):
        self.top = None
        self.bottom = None
        self.length = 0
    
    def printList(self):
        node = self.top
        nums = []
        while(node):
            nums.append(node.value)
            node = node.next
        print(nums)
            
    def peak(self):
        if (self.top):
            return print(self.top.value)
        
    def push(self, value):
        node = Node(value)
        if(self.top is None):
            self.top = node
            self.bottom = node
        else:
            node.next = self.top
            self.top = node
        self.length+=1
            
    def pop(self):
        if(self.top is None):
            return None
        else:
            self.top = self.top.next
            self.length-=1
        
stack = Stack()
stack.push("apple") 
stack.push("orange")
stack.push("banana")
stack.push("kiwi")
stack.peak()
stack.pop()
stack.printList()
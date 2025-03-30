"""
Stack Data Structure Implementation

A Stack is a linear data structure that follows the Last-In-First-Out (LIFO) principle.
The last element added to the stack will be the first one to be removed.

Key characteristics:
- LIFO (Last-In-First-Out) principle
- Dynamic size
- Single-ended operations (top only)
- No random access to elements

Common use cases:
- Function call stack in programming languages
- Undo/Redo operations in text editors
- Backtracking algorithms
- Expression evaluation and syntax parsing
- Browser history navigation

Operations:
- push: Add an element to the top of the stack
- pop: Remove and return the top element
- peek: View the top element without removing it
- isEmpty: Check if the stack is empty
- size: Get the number of elements in the stack

Time Complexity:
- Push: O(1)
- Pop: O(1)
- Peek: O(1)
- isEmpty: O(1)
- size: O(1)

Space Complexity: O(n) where n is the number of elements in the stack
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
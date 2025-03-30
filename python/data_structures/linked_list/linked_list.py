"""
Singly Linked List Data Structure Implementation

A Linked List is a linear data structure where elements are stored in nodes, and each node points to the next node in the sequence.
Unlike arrays, linked lists are not stored in contiguous memory locations.

Key characteristics:
- Dynamic size
- Non-contiguous memory allocation
- Sequential access only
- No random access to elements
- Memory efficient for dynamic data
- Easy insertion and deletion

Common use cases:
- Dynamic memory allocation
- Implementation of stacks and queues
- Browser history navigation
- Text editor undo/redo functionality
- Memory management in operating systems
- Implementation of adjacency lists for graphs

Operations:
- append: Add an element at the end
- prepend: Add an element at the beginning
- insert: Add an element at a specific position
- remove: Remove an element from a specific position
- removeHead: Remove the first element
- removeTail: Remove the last element
- traverseToIndex: Access an element at a specific position

Time Complexity:
- Append: O(1)
- Prepend: O(1)
- Insert: O(n)
- Remove: O(n)
- RemoveHead: O(1)
- RemoveTail: O(n)
- Access by index: O(n)
- Search: O(n)

Space Complexity: O(n) where n is the number of elements in the list
"""

class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None
        self.tail = None
        self.length = 0
        
    def append(self, value):
        node = Node(value)
        if(self.head is None):
            self.head = node
            self.tail = node
        else:
            self.tail.next = node
            self.tail = node
        self.length+=1
    
    def prepend(self, value):
        if(self.head is None):
            return self.append(value)
        else:
            node = Node(value)
            node.next = self.head
            self.head = node
            self.length+=1
    
    def printList(self):
        nums = []
        currentNode = self.head
        while(currentNode is not None):
            nums.append(currentNode.value)
            currentNode = currentNode.next 
        print(nums)
    
    def insert(self, index, value):
        if(index<=0):
            self.prepend(value)
        elif(index >= self.length):
            self.append(value)
        else:
            node = Node(value)
            leader = self.traverseToIndex(index-1)
            temp = leader.next
            leader.next = node
            node.next = temp
            self.length+=1
    
    def removeHead(self):
        self.head = self.head.next
        self.length-=1
        
    def removeTail(self):
        leader = self.traverseToIndex(self.length-2)
        leader.next = None
        self.length-=1
        
    def remove(self, index):
        if(index<=0):
            return removeHead()
        elif(index>=self.length):
            return removeTail()
        else:
            leader = self.traverseToIndex(index-1)
            temp = leader.next.next
            leader.next = temp
            self.length-=1
        
    def traverseToIndex(self, index):
        currentNode = self.head
        counter=0
        while(counter != index):
            currentNode = currentNode.next
            counter+=1
        return currentNode

ll = LinkedList()
ll.append(1) # Inserts 1 to the end of the Linked List
ll.append(2) # Inserts 2 to the end  the Linked List
ll.append(3) # Inserts 3 to the start  the Linked List
ll.prepend(0) # Inserts 0 to the start  the Linked List
ll.insert(0, -1) # Inserts -1 to at index 0 of the the Linked List
ll.removeHead() # Removes Head Node
ll.removeTail() # Removes Tail Node
ll.remove(1) # Removes Node at index 2
ll.printList()
        
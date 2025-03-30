"""
Min Binary Heap Implementation

A Min Binary Heap is a specialized tree-based data structure that satisfies the heap property.
In a min heap, for any given node N, the value of N is less than or equal to the values of its children.

Key characteristics:
- Complete binary tree structure
- Parent nodes are always smaller than their children
- Root node contains the minimum value
- O(log n) insertion and deletion operations
- O(1) access to minimum element

Common use cases:
- Priority queues (where lower values have higher priority)
- Event-driven simulation
- Graph algorithms (Dijkstra's shortest path)
- Task scheduling systems

Operations:
- insert: Adds a new value to the heap and maintains the heap property.
- remove: Removes the maximum value (the root node) and re-adjusts the heap.
- peek: Retrieves the maximum value without removing it from the heap.
- size: Returns the number of elements currently in the heap.

Time Complexity:
- Insert: O(log n)
- Remove min: O(log n)
- Peek min: O(1)
- Build heap: O(n)
"""

class MinBinaryHeap:
    def __init__(self):
        self.heap = []
        
    def insert(self, value):
        self.heap.append(value)
        self._bubble_up(len(self.heap)-1)
    
    def _bubble_up(self, index):
        while index:
            parent = (index-1)//2
            if(self.heap[index] < self.heap[parent]):
                self.heap[parent], self.heap[index] = self.heap[index], self.heap[parent]
                index = parent
            else:
                break
            
    def peek(self):
        return print(self.heap[0])
    
    def remove(self):
        if(len(self.heap)==0):
            raise IndexError("Heap is Empty")
        
        self.heap[0] = self.heap[-1]
        self.heap.pop()
        
        if(len(self.heap) > 0):
            self._bubble_down(0)
            
    def _bubble_down(self, index):
        length = len(self.heap)
        while index < length:
            left_index = 2*index+1
            right_index = 2*index+2
            smallest = index 
            if(left_index < length and self.heap[left_index]<self.heap[index]):
                smallest = left_index
            if(right_index < length and self.heap[right_index]<self.heap[index]):
                smallest = right_index
            if (smallest != index):
                self.heap[smallest], self.heap[index] = self.heap[index], self.heap[smallest]
                index = smallest
            else:
                break
    
    def __str__(self):
        return str(self.heap)
        
mbh = MinBinaryHeap()
mbh.insert(3)
mbh.insert(2)
mbh.insert(1)
mbh.insert(1)
mbh.peak()
print(str(mbh))
mbh.remove()
print(str(mbh))
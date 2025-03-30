"""
Max Binary Heap Implementation

A Max Binary Heap is a specialized tree-based data structure that satisfies the heap property.
In a max heap, for any given node N, the value of N is greater than or equal to the values of its children.

Key characteristics:
- Complete binary tree structure
- Parent nodes are always larger than their children
- Root node contains the maximum value
- O(log n) insertion and deletion operations
- O(1) access to maximum element

Common use cases:
- Priority queues
- Heap sort algorithm
- Graph algorithms (Dijkstra's, Prim's)
- Event-driven simulation

Operations:
- insert: Adds a new value to the heap and maintains the heap property.
- remove: Removes the maximum value (the root node) and re-adjusts the heap.
- peek: Retrieves the maximum value without removing it from the heap.
- size: Returns the number of elements currently in the heap.

Time Complexity:
- Insert: O(log n)
- Remove max: O(log n)
- Peek max: O(1)
"""
class MaxBinaryHeap:
    def __init__(self):
        self.heap = []
        
    def insert(self, value):
        self.heap.append(value)
        self._bubble_up(len(self.heap)-1)
    
    def _bubble_up(self, index):
        while index:
            parent = (index-1)//2
            if(self.heap[index] > self.heap[parent]):
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
            largest = index 
            if(left_index < length and self.heap[left_index]>self.heap[index]):
                largest = left_index
            if(right_index < length and self.heap[right_index]>self.heap[index]):
                largest = right_index
            if (largest != index):
                self.heap[largest], self.heap[index] = self.heap[index], self.heap[largest]
                index = largest
            else:
                break
    
    def __str__(self):
        return str(self.heap)
        

mbh = MaxBinaryHeap()
mbh.insert(3)
mbh.insert(2)
mbh.insert(1)
mbh.insert(1)
mbh.peak()
print(str(mbh))
mbh.remove()
print(str(mbh))
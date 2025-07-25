"""
Binary Search Tree (BST) Implementation

A Binary Search Tree is a node-based binary tree data structure where each node follows the BST property:
For any node N:
- All values in the left subtree of N are less than N’s value
- All values in the right subtree of N are greater than N’s value

Key characteristics:
- Binary tree structure (each node has at most 2 children)
- Ordered structure enables fast lookup, insertion, and deletion
- In-order traversal yields sorted elements

Common use cases:
- Efficient searching and insertion/removal of sorted data
- Implementing associative arrays or sets
- Range queries and sorted data storage
- Underlying structure for maps and sets in many libraries

Operations:
- insert: Adds a new node to the BST in the correct sorted position
- bfs (Breadth-First Search): Traverses the tree level by level
- dfs (Depth-First Search): Traverses the tree in a depthward manner (pre-order here)

Time Complexity:
- Average case: O(log n) for search, insert, delete
- Worst case (unbalanced): O(n)
"""

from collections import deque

class Node:
    def __init__(self, value):
        self.left = None
        self.right = None
        self.value = value

class BST:
    def __init__(self):
        self.root = None

    def insert(self, value):
        node = Node(value)
        if self.root is None:
            self.root = node
            return

        current = self.root
        while True:
            if value > current.value:
                if current.right is not None:
                    current = current.right
                else:
                    current.right = node
                    break
            elif value < current.value:
                if current.left is not None:
                    current = current.left
                else:
                    current.left = node
                    break
            else:
                # Optional: Ignore duplicates
                break

    def bfs(self):
        if self.root is None:
            print([])
            return

        result = []
        queue = deque([self.root])

        while queue:
            node = queue.popleft()
            result.append(node.value)
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)

        print("BFS Traversal:", result)

    def dfs(self):
        if self.root is None:
            print([])
            return

        result = []
        stack = [self.root]

        while stack:
            node = stack.pop()
            result.append(node.value)
            if node.right:
                stack.append(node.right)
            if node.left:
                stack.append(node.left)

        print("DFS (Pre-order) Traversal:", result)
        
    def lookup(self, value):
        current = self.root
        while current is not None:
            if value > current.value:
                current = current.right
            elif value < current.value:
                current = current.left
            else:
                return current  # Node found
        return None  # Node not found


# Example usage
bst = BST()
bst.insert(20)
bst.insert(21)
bst.insert(18)
bst.insert(1)

bst.bfs()  # Output: BFS Traversal: [20, 18, 21, 1]
bst.dfs()  # Output: DFS (Pre-order) Traversal: [20, 18, 1, 21]
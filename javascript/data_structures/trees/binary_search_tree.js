/**
 * Binary Search Tree (BST) Data Structure Implementation
 * 
 * A Binary Search Tree is a node-based binary tree data structure that has the following properties:
 * - The left subtree of a node contains only nodes with keys less than the node's key
 * - The right subtree of a node contains only nodes with keys greater than the node's key
 * - Both the left and right subtrees must also be binary search trees
 * 
 * Key characteristics:
 * - Hierarchical structure
 * - Ordered data storage
 * - No duplicate values
 * - Efficient search operations
 * - Dynamic size
 * 
 * Common use cases:
 * - Database indexing
 * - File system organization
 * - Network routing tables
 * - Symbol tables in compilers
 * - Game state management
 * - Decision trees in AI/ML
 * 
 * Operations:
 * - insert: Add a new node with a value
 * - lookup: Find a node with a specific value
 * - remove: Delete a node with a specific value
 * - traverse: Visit all nodes in a specific order
 * 
 * Time Complexity:
 * - Insert: O(log n) average, O(n) worst
 * - Lookup: O(log n) average, O(n) worst
 * - Remove: O(log n) average, O(n) worst
 * - Traverse: O(n)
 * 
 * Space Complexity: O(n) where n is the number of nodes
 * 
 * Note: The performance of BST operations depends on the tree's balance.
 * In worst case (skewed tree), operations can degrade to O(n).
 */

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return console.log(this);
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            return console.log(this);
          }
          currentNode = currentNode.left;
        } else {
          if (!currentNode.right) {
            currentNode.right = newNode;
            return console.log(this);
          }
          currentNode = currentNode.right;
        }
      }
    }
  }

  lookup(value) {
    let currentNode = this.root;
    while (currentNode !== null) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else {
        return console.log(currentNode);
      }
    }
    return console.log("Not Found");
  }
}

const bst = new BinarySearchTree();
bst.insert(1); //Inserts 1 to the Tree
bst.insert(2); //Inserts 2 to the Tree
bst.insert(0); //Inserts 0 to the Tree
bst.insert(3); //Inserts 3 to the Tree
bst.lookup(2); //Searches for 2 in the Tree

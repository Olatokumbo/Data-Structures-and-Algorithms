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

const Bst = new BinarySearchTree();
Bst.insert(1); //Inserts 1 to the Tree
Bst.insert(2); //Inserts 2 to the Tree
Bst.insert(0); //Inserts 0 to the Tree
Bst.insert(3); //Inserts 3 to the Tree
Bst.lookup(2); //Searches for 2 in the Tree

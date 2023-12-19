const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions

*/

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
    // remove line with error and write your code here
  }

  add(data) {
    const newNode = new Node(data);

    if (!this.rootNode) {
      this.rootNode = newNode;
    } else {
      let current = this.rootNode;
      while (true) {
        if (data < current.data) {
          if (current.left === null) {
            current.left = newNode;
            break;
          }
          current = current.left;
        } else if (data > current.data) {
          if (current.right === null) {
            current.right = newNode;
            break;
          }
          current = current.right;
        } else {
          break;
        }
      }
    }
    // remove line with error and write your code here
  }

  has(data) {
    let current = this.rootNode;
    while (current !== null) {
      if (data === current.data) {
        return true;
      } else if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
    // remove line with error and write your code here
  }

  find(data) {
    let current = this.rootNode;
    while(current !== null) {
      if (data === current.data) {
        return current;
      } else if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return null;
    // remove line with error and write your code here
  }

  remove(data) {
    let current = this.rootNode
    let parentNode = null;
    let found = false;

    while (current !== null) {
      if (data === current.data) {
        found = true;
        break;
      } else if (data < current.data) {
        parentNode = current;
        current = current.left;
      } else {
        parentNode = current;
        current = current.right;
      }
    }

    if (!found) {
      return;
    }

    if (current.left === null && current.right === null) {
      if (parentNode === null) {
        this.rootNode = null;
      } else if (current === parentNode.left) {
        parentNode.left = null;
      } else {
        parentNode.right = null;
      }
    } else if (current.left === null) {
      if (parentNode === null) {
        this.rootNode = current.right;
      } else if (current === parentNode.left) {
        parentNode.left = current.right;
      } else {
        parentNode.right = current.right;
      }
    } else if (current.right === null) {
        if (parentNode === null) {
          this.rootNode = current.left;
        } else if (current === parentNode.left) {
          parentNode.left = current.left;
        } else {
          parentNode.right = current.left;
        }
    } else {
      let tempNode = current.right;
      let replacementNode = null;
      while (tempNode.left !== null) {
        replacementNode = tempNode;
        tempNode = tempNode.left
      }
      current.data = tempNode.data;

      if (replacementNode !== null) {
        replacementNode.left = tempNode.right;
      } else {
        current.right = tempNode.right;
      }
    }
    
  }

  min() {
    if (!this.rootNode) {
      return null;
    }

    let current = this.rootNode;
    while (current.left !== null) {
      current = current.left;
    }

    return current.data;
    // remove line with error and write your code here
  }

  max() {
    if (!this.rootNode) {
      return null;
    }

    let current = this.rootNode;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
    // remove line with error and write your code here
  }
  
}

module.exports = {
  BinarySearchTree
};
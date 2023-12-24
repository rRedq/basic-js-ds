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
    this.data = null;
}


root() {
  return !this.data ? null : this.data;
}

addNewElement(root, val) {
  if (!root) {
    return new Node(val);
  }
  if (root.data === val) {
    return root;
  }
  val < root.data ? root.left = this.addNewElement(root.left, val) : root.right = this.addNewElement(root.right, val);

  return root;
}

add(data) {
  this.data = this.addNewElement(this.data, data);
}

searchingElement(root, val) {
  if (!root) {
    return null;
  }
  if (root.data === val) {
    return root;
  }

  return val > root.data ?  this.searchingElement(root.right, val) : this.searchingElement(root.left, val);
}

has(data) {
  return this.searchingElement(this.data, data) !== null;
}

find(data) {
  return this.searchingElement(this.data, data);
}

removeElement(root, val) {
  if (!root) {
    return null;
  }
  else if (val < root.data) {
    root.left = this.removeElement(root.left, val);
    return root;
  }
  else if (val > root.data) {
    root.right = this.removeElement(root.right, val);
    return root;
  }
  else {
    if (!root.left && !root.right) {
      return null;
    }
    if (!root.left) {
      root = root.right;
      return root;
    }
    if (!root.right) {
      root = root.right;
      return root;
    }

    let minimumRoot = root.right;
    while (minimumRoot.left) {
      minimumRoot = minimumRoot.left;
    }
    root.data = minimumRoot.data;
    root.right = this.removeElement(root.right, minimumRoot.data);

    return root;
  }
}

remove(data) {
  this.data = this.removeElement(this.data, data);
}

searchingMinMax(param) {
  if (this.data === null) {
    return null;
  }

  let currentValue = this.data;
  if (param === 'min') {
    while (currentValue.left) {
      currentValue = currentValue.left;
    }
  }
  else {
    while (currentValue.right) {
      currentValue = currentValue.right;
    }
  }
  return currentValue;
}

min() {
  return this.searchingMinMax('min').data;
}

max() {
  return this.searchingMinMax('max').data;
}
}

module.exports = {
  BinarySearchTree
};
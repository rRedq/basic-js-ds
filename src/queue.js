const { NotImplementedError } = require("../extensions/index.js");

const { ListNode } = require("../extensions/list-node.js");

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  root = null;

  constructor(value) {
    this.root = value;
  }

  enqueue(value) {
    if (this.root === undefined) {
      this.root = new ListNode(value);
      return true;
    }
    let node = this.root;
    let newNode = new ListNode(value);
    newNode.next = node;
    this.root = newNode;
  }
  dequeue() {
    let node = this.root;
    while (node.next.next) {
      node = node.next;
    }
    let res = node.next;
    node.next = null;
    return res;
  }
  getUnderlyingList() {
    return this.root;
  }
}

module.exports = {
  Queue,
};

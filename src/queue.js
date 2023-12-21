const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

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

  constructor() {
    this.queueFirst = null;
    this.queueLast = null;
}

getUnderlyingList() {
  return this.queueFirst;
}

enqueue(value) {
  const newElement = new ListNode(value);
  if (!this.queueFirst) {
    this.queueFirst = newElement;
    this.queueLast = newElement;
  }
  else {
    this.queueLast.next = newElement;
    this.queueLast = newElement;
  }
}

dequeue() {
  const deletedElement = this.queueFirst;
  this.queueFirst = this.queueFirst.next;
  return deletedElement;
}
}

module.exports = {
  Queue
};

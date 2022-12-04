// STACK IMPLEMENTATION
class Stack {
  constructor() {
    this.items = [];
  }
  push(item) {
    this.items.push(item);
  }
  pop() {
    return this.items.pop();
  }
  peek() {
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length === 0;
  }
}

// this function will take in a string as input
// it will return true or false based on whether the brackets are properly matched
// the valid brackets it will scan for are {}, [], and ()
// you must use a Stack in your implementation of this function
// refer to the bracket matching readMe.md for more details
function bracketMatching(input) {
  // take the string and put into an array
  let strArr = input.split("");
  const regEx = /[\{\(\[\]\)\}]/;
  const regExClose = /[\}\]\)]/;
  strArr = strArr.filter((char) => char.match(regEx) !== null);

  const stack = new Stack();

  for (let i = 0; i < strArr.length; i++) {
    const element = strArr[i];

    if (stack.isEmpty() || !regExClose.test(element)) {
      stack.push(element);
    }
    if (regExClose.test(element)) {
      const previous = stack.peek();
      // when a closing bracket is found check the previous element in the stack to make sure it closes the brackets
      if (
        (/\{/.test(previous) && /\}/.test(element)) ||
        (/\[/.test(previous) && /\]/.test(element)) ||
        (/\(/.test(previous) && /\)/.test(element))
      ) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return true;
}

class Node {
  constructor(data, priority) {
    this.data = data;
    this.priority = priority;
    this.next = null;
  }
}

// This priority queue is implemented as a Linked List
// Your challenge is to implement the insert method of the priority queue
class priorityQueue {
  constructor() {
    this.head = null;
  }
  enqueue(data, priority) {
    // Insert the new data into the proper place in the queue
    // the lowest priority number should be the head node
    // the priorities should remain in order
    // if two nodes have the same priority, put the new one first

    //create a new Node
    const newNode = new Node(data, priority);
    //check if the queue is empty --> add new node as head if it is
    if (this.head === null) {
      this.head = newNode;
      return;
    }
    if (this.head.next === null) {
      if (newNode.priority > this.head.priority) {
        this.head.next = newNode;
      } else {
        const detachHead = this.head;
        this.head = newNode;
        this.head.next = detachHead;
      }
      return;
    }
    // traverse through the queue starting at the head
    let current = this.head;
    let previous = null;
    while (newNode.priority > current.priority) {
      const previousCurrent = current;
      previous = previousCurrent;
      current = current.next;
      if (current === null) {
        previous.next = newNode;
        return;
      }
    }

    if (previous === null) {
      const detachHead = this.head;
      this.head = newNode;
      newNode.next = detachHead;
    } else {
      previous.next = newNode;
      newNode.next = current;
    }
  }
  peek() {
    // return the highest priority node in the queue
    if (this.head === null) {
      return;
    }
    return this.head;
  }
  dequeue() {
    const removedNode = this.peek();
    if (this.head === null) {
      return;
    }
    const secondNode = this.head.next;
    this.head = secondNode;
    return removedNode;

    // remove and return the highest priority node in the queue
  }
}

module.exports = {
  bracketMatching,
  priorityQueue,
};

class Node {
  constructor(data, priority) {
    this.data = data;
    this.priority = priority;
    this.next = null;
  }
}

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
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    return current;
  }
  dequeue() {
    // remove and return the highest priority node in the queue
  }
}

const a = new priorityQueue();

a.enqueue(1, 1);
a.enqueue(2, 1);
a.enqueue(3, 1);
a.enqueue(4, 2);
a.enqueue(5, 2);
console.log(a);
console.log(a.head);
console.log(a.head.next);
console.log(a.head.next.next);
console.log(a.peek());

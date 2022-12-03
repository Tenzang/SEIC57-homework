class Node {
  constructor(data) {
    // a Node starts with a given data property
    this.data = data;
    // a Node also has a .next property initialized as null
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    // a Linked List starts with a "head" property intialized as null
    this.head = head;
  }
  appendNode(data) {
    // creates a new node with the given data and adds it to back of the list
    let newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
  }
  prependNode(data) {
    // creates a new node with the given data and adds it to the front of the list
    let newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let currentHead = this.head;
      this.head = newNode;
      newNode.next = currentHead;
    }
  }
  pop() {
    // removes the last node from the list and returns it
    if (this.head === null) {
      return null;
    } else if (this.head.next === null) {
      const removedNode = this.head;
      this.head = null;
      return removedNode;
    }
    let currentNode = this.head;
    while (currentNode.next.next !== null) {
      currentNode = currentNode.next;
    }
    let removedNode = currentNode.next;
    currentNode.next = null;
    return removedNode;
  }
  removeFromFront() {
    // remove the head node from the list and return it
    // the next node in the list is the new head node
    if (this.head !== null) {
      const removed = this.head;
      if (this.head.next !== null) {
        const secondNode = this.head.next;
        this.head = secondNode;
      } else {
        this.head = null;
      }
      return removed;
    }
  }
  insertAt(X, data) {
    // insert a new node into the list with the given data
    // place it after X nodes in the list
    // if X exceeds the bounds of the list, put the node at the end
    // insertAt(0, 7) would add the new node as the head
    if (X === 0 || this.head === null) {
      this.prependNode(data);
      return;
    }
    let currentNode = this.head;
    let counter = 1;
    while (counter < X) {
      currentNode = currentNode.next;
      counter++;

      if (currentNode === null) {
        this.appendNode(data);
        return;
      }
    }

    let newNode = new Node(data);
    newNode.next = currentNode.next;
    currentNode.next = newNode;
  }
  removeAt(X) {
    // remove the Xth node from the list, considering 0 to be the first node
    // return the node that has been removed
  }
  search(data) {
    // searches the list for a node with the given data
    // if it is found, return the "index" of the node, considering 0 to be the first node
    // if not, return false
  }
  sort() {
    // sort the Linked List in ascending order of data values
  }
}

a = new LinkedList().appendNode("hello");
console.log(a);

module.exports = {
  Node,
  LinkedList,
};

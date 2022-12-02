class Node {
  constructor(givenData) {
    // a Node starts with a given data property
    this.data = givenData;
    // a Node also has a .next property initialized as null
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    // a Linked List starts with a "head" property intialized as null
    this.head = null;
  }
  appendNode(data) {
    // creates a new node with the given data and adds it to back of the list
    let node = new Node(data);
    if (this.head === null) {
      this.head = node;
      return;
    }

    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    return;
  }
  prependNode(data) {
    // creates a new node with the given data and adds it to the front of the list
    let node = new Node(data);
    const previousHead = this.head;
    node.next = previousHead;
    this.head = node;
    return;
  }
  pop() {
    // removes the last node from the list and returns it
    let currentNode = this.head;
    let nodeBefore = null;
    if (currentNode.next === null) {
      currentNode = this.head;
      this.head = null;
      return currentNode;
    }
    while (currentNode.next) {
      nodeBefore = currentNode;
      currentNode = currentNode.next;
    }
    nodeBefore.next = null;
    return currentNode;
  }
  removeFromFront() {
    // remove the head node from the list and return it
    // the next node in the list is the new head node
    const headNode = this.head;
    this.head = headNode.next;
    return headNode;
  }
  insertAt(X, data) {
    // insert a new node into the list with the given data
    const node = new Node(data);
    let count = X;
    // place it after X nodes in the list
    let currentNode = this.head;
    let nextNode = currentNode.next;
    if (count === 0) {
      this.prependNode(data);
      return;
    }

    while (count > 1) {
      [currentNode, nextNode] = [nextNode, nextNode.next];
      count--;
    }
    if (!nextNode) {
      this.appendNode(data);
      return;
    }
    node.next = nextNode;
    currentNode.next = node;
    return;
    // if X exceeds the bounds of the list, put the node at the end
    // insertAt(0, 7) would add the new node as the head
  }
  removeAt(X) {
    // remove the Xth node from the list, considering 0 to be the first node
    // return the node that has been removed
    let nodeBefore = null;
    let nodeToRemove = this.head;
    let nodeAfter = nodeToRemove.next;
    let count = X;
    if (count === 0) {
      return this.removeFromFront();
    }
    while (count > 0) {
      nodeBefore = nodeToRemove;
      nodeToRemove = nodeToRemove.next;
      nodeAfter = nodeToRemove.next;
      count--;
    }
    nodeBefore.next = nodeAfter;
    return nodeToRemove;
  }
  search(data) {
    // searches the list for a node with the given data
    // if it is found, return the "index" of the node, considering 0 to be the first node
    // if not, return false
    let index = 0;
    let found = false;
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.data === data) {
        found = true;
        break;
      }
      currentNode = currentNode.next;
      index++;
    }
    return found ? index : false;
  }
  sort() {
    // sort the Linked List in ascending order of data values
    const nodes = [];
    let currentNode = this.head;
    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }
    this.basicSort(nodes);
    this.head = null;
    for (let i = 0; i < nodes.length; i++) {
      this.appendNode(nodes[i].data);
    }
  }
  basicSort(nodes) {
    nodes.sort((a, b) => a.data - b.data);
  }
}

module.exports = {
  Node,
  LinkedList,
};

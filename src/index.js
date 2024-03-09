class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class NodeList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append(data) {
    this.tail = new Node(data);
  }

  prepend(data) {
    this.head = new Node(data, this.head);
    this.size += 1;
  }

  nodeListSize() {
    return this.size;
  }

  nodeListHead() {
    return this.head;
  }

  nodeTail() {
    let current = this.head;

    while (current) {
      if (current.next === null) {
        return current;
      }
      current = current.next;
    }
  }

  at(index){
    let current = this.head
    for (let i = 0; i < index; i+=1) {
        current = current.next;
    }
    return current;
  }

  toString() {
    let current = this.head;

    while (current) {
      console.log(`(${current.data}) ->`);
      current = current.next;
    }
    console.log(null);
  }
}

const ll = new NodeList();
ll.prepend(100);
ll.prepend(200);
console.log(ll.at(1));

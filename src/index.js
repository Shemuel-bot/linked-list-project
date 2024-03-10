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
    const current = this.head;
    this.tail = new Node(data);
    while (this.head) {
      if (this.head.next === null) {
        this.head.next = this.tail;
        break;
      }
      this.head = this.head.next;
    }
    this.head = current;
    this.size += 1;
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

  at(index) {
    let current = this.head;
    for (let i = 0; i < index; i += 1) {
      current = current.next;
    }
    return current;
  }

  pop() {
    const current = this.head;
    while (this.head) {
      if (this.head.next.next === null) {
        this.head.next = null;
        break;
      }
      this.head = this.head.next;
    }
    this.head = current;
    this.size -= 1;
  }

  contains(value){
    const current = this.head;
    while (this.head) {
      if (this.head.data === value) {
        this.head = current;
        return true;
      }
      if(this.head.next === null){
        this.head = current;
        return false;
      }
      this.head = this.head.next;
    }
  }

  find(value){
    const current = this.head;
    let index = 0;
    while (this.head) {
      if (this.head.data === value) {
        this.head = current;
        return index;
      }
      if(this.head.next === null){
        this.head = current;
        return null;
      }
      this.head = this.head.next;
      index += 1;
    }
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

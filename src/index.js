class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class NodeList {
    constructor(){
        this.head = null;
        this.size = 0;
    }

    prepend(data){
        this.head = new Node(data, this.head);
    }


    toString(){
        let current = this.head

        while(current){
           console.log(`(${current.data}) ->`);
           current = current.next;
        }
        console.log(null)
    }
}

const ll = new NodeList();
ll.prepend(100);
ll.prepend(200);
ll.toString();
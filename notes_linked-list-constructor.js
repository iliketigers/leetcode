class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  insertLast(data) {
    let node = new Node(data);
    let current;

    if (!this.head) {
      this.head = node;
    } else {
      current = this.head; // make a new reference, NOT a copy
      while (current.next) {
        current = current.next; // just changes where you're looking; the original nodes still exist
      }
      current.next = node; // adds node to original LL, so now both current and this.head have the new thing
    }
    this.size++;
  }

  // insert at index
  insertAt(data, index) {
    if (index > 0 && index > this.size) {
      return;
    }
    if (index === 0) {
      this.insertFirst(data);
      return;
    }
    const node = new Node(data);
    let current, previous;
    current = this.head;
    let count = 0;
    while (count < index) {
      previous = current; // Node before index
      count++;
      current = current.next; // Node after index
    }
    node.next = current; // inserts "after" node into its "next"
    previous.next = node; // inserts newly created LL into original list
    this.size++;
  }

  // get at index
  getAt(index) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (count === index) {
        console.log(current.data);
      }
      count++;
      current = current.next;
    }
    return null;
  }

  // remove at index
  removeAt(index) {
    if (index > 0 && index > this.size) {
      return;
    }
    let current = this.head;
    let previous;
    let count = 0;

    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        previous = current;
        current = current.next;
        count++;
      }
      previous.next = current.next;
    }
    this.size--;
  }

  // clear list
  clearList() {
    this.head = null;
    this.size = 0;
  }

  // print list data
  printListData() {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const ll = new LinkedList();
ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertLast(400);
ll.insertAt(500, 2);
ll.printListData();
ll.getAt(0);
ll.removeAt(0);
ll.printListData();
console.log('clear');
ll.clearList();
ll.printListData();

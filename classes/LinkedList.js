class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    size() {
        var count = 0;
        var temp = this.head;

        while (temp !== null) {
            count++;
            temp = temp.next;
        }
        return count;
    }

    getHead() {
        return this.head.data;
    }
}

module.exports = { Node, LinkedList };
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
        let counter = 0;
        let node = this.head;

        while (node) {
            counter++;
            node = node.next;
        }
        return counter;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        let node = this.head;

        if (!node) return null;

        while (node) {
            if (node.next) {
                node = node.next;
            } else {
                return node;
            }
        }
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        if (!this.head) return;        

        this.head = this.head.next;
    }

    removeLast() {
        if (!this.head) return;

        if (!this.head.next) {
            this.head = null;
            return;
        }

        let previous = this.head;
        let node = this.head.next;

        while (node.next) {
            previous = node;
            node = node.next;
            if (!node.next) {
                previous.next = null;
            }
        }
    }

    insertLast(data) {
        const last = this.getLast();
        
        if (last) {
            last.next = new Node(data);
        } else {
            this.insertFirst(data);
        }
    }

    getAt(index) {
        let counter = 0;

        let node = this.head;

        while (node) {
            if (counter === index) return node;

            node = node.next;
            counter++;
        }
        return null;
    }

    removeAt(index) {
        let node = this.head;
        let counter = 0;
        let previous, future;

        if (!this.head) return null;

        if (index === 0 && this.size() === 1) {
            this.head = null;
            return node;
        }

        if (index === 0 && this.size() > 1) {
            this.head = node.next;
            return node;
        }

        if (index <= this.size() - 1) {
            previous = this.getAt(index - 1);
            while (node) {
                if (counter === index) {
                    previous.next = node.next;
                    return node;
                }
                node = node.next;
                counter++;
            }

        } else {
            return null;
        }
    }

    insertAt(data, index) {
        let node = this.head;
        let previous;
        let future;
        let counter = 0;

        if (!this.head) {
            this.insertFirst(data);
        }

        if (index === 0 && this.head) {
            this.insertFirst(data);
        }

        if (index > this.size() - 1) {
            this.insertLast(data);
        } 

        if (index > 0 && index <= this.size() - 1 ) {
            previous = this.getAt(index - 1);
            future = this.getAt(index);
            while(node) {
                if (counter === index) {
                    let newNode = new Node(data);
                    previous.next = newNode;
                    newNode.next = future;
                }
                node = node.next;
                counter++;
            }
        }
    }

    print() {
        let node = this.head;

        while (node) {
            console.log(node.data);
            node = node.next;
        }
    }

    
}

module.exports = { Node, LinkedList };
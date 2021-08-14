class Stack {
    constructor() {
        this.data = [];
    }
    
    push(record) {
        this.data.push(record);
    }

    pop() {
        return this.data.pop();
    }

    peek() {
        return this.data[this.data.length - 1];
    }

    length() {
        return this.data.length;
    }

    print() {
        console.log(this.data);
    }
}

module.exports = Stack;
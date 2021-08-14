const Queue = require("../classes/Queue");

function weave(queueOne, queueTwo) {
    let weaveQ = new Queue();

    while (queueOne.peek() || queueTwo.peek()) {
        if (queueOne.peek()) {
            weaveQ.add(queueOne.remove());
        } 
        if (queueTwo.peek()) {
            weaveQ.add(queueTwo.remove());
        }
    }
    return weaveQ;
}

module.exports = weave;
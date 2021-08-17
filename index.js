const Queue = require('./classes/Queue');
const weave = require('./algorithms/Weave');
const Stack = require('./classes/Stack');
const { LinkedList } = require('./classes/LinkedList');

let q = new Queue();

// add something
q.add('Freddie');
console.log(q);

q.add('Lucy');
q.add('Simon');

console.log(q);

// remove first item in the queue
let catOnTrip = q.remove()
console.log(`${catOnTrip} is on holiday.`);

// use peek()
let next = q.peek();
console.log(next);
console.log(q);


const sourceOne = new Queue();

const sourceTwo = new Queue();

sourceOne.add('one');
sourceOne.add('two');
sourceOne.add('three');
sourceOne.add('four');

sourceTwo.add('red');
sourceTwo.add('blue');
sourceTwo.add('green');

console.log(sourceOne.length());

let weaving = weave(sourceOne, sourceTwo);
console.log(weaving);

let s = new Stack();

s.push('cat');
s.push('dog');
s.push('bunny');

console.log(s);

console.log(s.peek());

s.push('hamster');
console.log(s)

s.pop()
console.log(s);

console.log(s.length());

q.print();
s.print();

const list = new LinkedList();
list.insertFirst('red');
list.insertFirst('blue');
list.insertFirst('purple');
list.insertFirst('orange');

console.log(list);

console.log(list.size());

console.log(list.getFirst());
console.log(list.getLast());

const bList = new LinkedList();
console.log(bList.getFirst());

bList.insertFirst(10); 
bList.insertFirst(20);
bList.insertFirst(30);
console.log(bList.size());
bList.clear();
console.log(bList.size());

list.removeFirst();
console.log(list);
console.log(list.size());
list.removeLast();
console.log(list)
list.insertLast('brown');

let cars = new LinkedList();

cars.insertLast('big car');
console.log(cars);
cars.insertLast('small car');
console.log(cars);
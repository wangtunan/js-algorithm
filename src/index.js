import CircularLinkedList from './utils/circularLinkedList.js';

const linkedList = new CircularLinkedList();
linkedList.push(1);
linkedList.push(2);
linkedList.removeAt(0);
console.log(linkedList.toString());
// console.log(linkedList.getSize())            // 4
// let node = linkedList.getElementAt(2)
// console.log(node.element)                 // 2
// console.log(linkedList.indexOf(5))        // 3
// console.log(linkedList.indexOf(8))        // -1
// console.log(linkedList.insert(9, 1))      // true
// console.log(linkedList.toString())        // 1,9,3,2,5
// console.log(linkedList.remove(2))         // 2
// console.log(linkedList.toString())        // 1,9,3,5
// console.log(linkedList.removeAt(2))       // 3
// console.log(linkedList.toString())        // 1,9,5
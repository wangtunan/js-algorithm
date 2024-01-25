import solveHanota from './divideAndConquer/solveHanota.js';

const source = [1, 2, 3, 4, 5]
const buffer = []
const target = []
const root = solveHanota(source, buffer, target);
console.log(source, buffer, target);
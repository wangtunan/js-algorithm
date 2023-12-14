import Graph from './graph/adjacencyListGraph.js';
import BFS from './graph/adjacencyListGraphBFS.js';
import DFS from './graph/adjacencyListGraphDFS.js';

const edges = [
  [1, 3], [1, 5],
  [2, 3], [2, 4], [2, 5],
  [4, 5]
];

const graph = new Graph(edges);

console.log(BFS(graph, 1));
console.log(DFS(graph, 1));

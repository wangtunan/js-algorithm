import Graph from './graph/adjacencyMatrixGraph.js';

const vertices = [1, 3, 2, 5, 4];
const edges = [
  [0, 1], [0, 3],
  [1, 0], [1, 2],
  [2, 1], [2, 3], [2, 4],
  [3, 0], [3, 2], [3, 4],
  [4, 2], [4, 3]
];
const adjMat = [
  [0, 1, 0, 1, 0],
  [1, 0, 1, 0, 0],
  [0, 1, 0, 1, 1],
  [1, 0, 1, 0, 1],
  [0, 0, 1, 1, 0]
];

const graph = new Graph(vertices, edges);

graph.removeVertex(6);
console.log(graph.getSize());
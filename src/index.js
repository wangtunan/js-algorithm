import Graph from './graph/adjacencyListGraph.js';

const edges = [
  [1, 3], [1, 5],
  [2, 3], [2, 4], [2, 5],
  [4, 5]
];

const graph = new Graph(edges);
graph.removeEdge(1, 3);
graph.removeEdge(1, 3);
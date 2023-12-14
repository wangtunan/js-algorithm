import AdjacencyListGraph from '../adjacencyListGraph.js';

const edges = [
  [1, 3], [1, 5],
  [2, 3], [2, 4], [2, 5],
  [4, 5]
];
let graph = {};

describe('AdjacencyListGraph tests', () => {
  beforeEach(() => {
    graph = new AdjacencyListGraph(edges);
  });

  it('test AdjacencyListGraph addEdge()', () => {
    let adjList = new Map();
    expect(graph.getSize()).toBe(5);

    graph.addEdge(1, 2);
    adjList = graph.getAdjacencyList();
    expect(graph.getSize()).toBe(5);
    expect(adjList.get(1)).toContain(2);
    expect(adjList.get(2)).toContain(1);

    graph.addEdge(1, 7);
    adjList = graph.getAdjacencyList();
    expect(graph.getSize()).toBe(5);
    expect(adjList.get(1)).not.toContain(7);
    expect(adjList.get(7)).toBeUndefined();
  });

  it('test AdjacencyListGraph removeEdge()', () => {
    let adjList = new Map();
    expect(graph.getSize()).toBe(5);

    graph.removeEdge(1, 3);
    adjList = graph.getAdjacencyList();
    expect(graph.getSize()).toBe(5);
    expect(adjList.get(1)).not.toContain(3);
    expect(adjList.get(3)).not.toContain(1);

    graph.removeEdge(3, 3);
    adjList = graph.getAdjacencyList();
    expect(graph.getSize()).toBe(5);
    expect(adjList.get(1)).not.toContain(3);
    expect(adjList.get(3)).not.toContain(1);
  });

  it('test AdjacencyListGraph addVertex()', () => {
    expect(graph.getSize()).toBe(5);

    graph.addVertex(6);
    expect(graph.getSize()).toBe(6);
    expect(graph.getAdjacencyList().get(6)).toEqual([]);

    graph.addVertex(6);
    expect(graph.getSize()).toBe(6);
    expect(graph.getAdjacencyList().get(6)).toEqual([]);
  });

  it('test AdjacencyListGraph removeVertex()', () => {
    expect(graph.getSize()).toBe(5);

    graph.removeVertex(3);
    expect(graph.getSize()).toBe(4);
    expect(graph.getAdjacencyList().get(1)).not.toContain(3);
    expect(graph.getAdjacencyList().get(2)).not.toContain(3);

    graph.removeVertex(7);
    expect(graph.getSize()).toBe(4);
    expect(graph.getAdjacencyList().get(1)).not.toContain(3);
    expect(graph.getAdjacencyList().get(2)).not.toContain(3);
  });

  it('test AdjacencyListGraph getSize() and getAdjacencyList()', () => {
    let adjList = new Map();
    expect(graph.getSize()).toBe(5);
    adjList = graph.getAdjacencyList();
    expect(adjList.get(1)).toEqual([3, 5]);
    expect(adjList.get(2)).toEqual([3, 4, 5]);
    expect(adjList.get(4)).toEqual([2, 5]);
    expect(adjList.get(5)).toEqual([1, 2, 4]);

    graph.addEdge(1, 2);
    expect(graph.getSize()).toBe(5);
    adjList = graph.getAdjacencyList();
    expect(adjList.get(1)).toEqual([3, 5, 2]);
    expect(adjList.get(2)).toEqual([3, 4, 5, 1]);
    expect(adjList.get(4)).toEqual([2, 5]);
    expect(adjList.get(5)).toEqual([1, 2, 4]);
  });

  it('test AdjacencyListGraph checkEdge()', () => {
    expect(graph.checkEdge(-1, -1)).toBe(false);
    expect(graph.checkEdge(-1, -2)).toBe(false);
    expect(graph.checkEdge(1, -2)).toBe(false);
    expect(graph.checkEdge(1, 1)).toBe(false);

    expect(graph.checkEdge(1, 2)).toBe(true);
    expect(graph.checkEdge(2, 3)).toBe(true);
    expect(graph.checkEdge(3, 4)).toBe(true);
  });
});

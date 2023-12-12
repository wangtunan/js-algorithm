import AdjacencyMatrixGraph from '../adjacencyMatrixGraph.js';

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
let graph = {};

describe('AdjacencyMatrixGraph tests', () => {
  beforeEach(() => {
    graph = new AdjacencyMatrixGraph(vertices, edges);
  });

  it('test AdjacencyMatrixGraph addEdge()', () => {
    expect(graph.getSize()).toBe(vertices.length);
    expect(graph.getVertices()).toEqual(vertices);
    expect(graph.getAdjacencyMatrix()).toEqual(adjMat);

    graph.addEdge(-1, 2);
    expect(graph.getSize()).toBe(vertices.length);
    expect(graph.getVertices()).toEqual(vertices);
    expect(graph.getAdjacencyMatrix()).toEqual(adjMat);

    graph.addEdge(2, 2);
    expect(graph.getSize()).toBe(vertices.length);
    expect(graph.getVertices()).toEqual(vertices);
    expect(graph.getAdjacencyMatrix()).toEqual(adjMat);

    graph.addEdge(0, 2);
    const graphAdjMat = graph.getAdjacencyMatrix();
    expect(graph.getSize()).toBe(vertices.length);
    expect(graph.getVertices()).toEqual(vertices);
    expect(graphAdjMat[0][2]).toBe(1);
    expect(graphAdjMat[2][1]).toBe(1);
  });

  it('test AdjacencyMatrixGraph removeEdge()', () => {
    expect(graph.getSize()).toBe(vertices.length);
    expect(graph.getVertices()).toEqual(vertices);
    expect(graph.getAdjacencyMatrix()).toEqual(adjMat);

    graph.removeEdge(-1, 2);
    expect(graph.getSize()).toBe(vertices.length);
    expect(graph.getVertices()).toEqual(vertices);
    expect(graph.getAdjacencyMatrix()).toEqual(adjMat);

    graph.removeEdge(2, 2);
    expect(graph.getSize()).toBe(vertices.length);
    expect(graph.getVertices()).toEqual(vertices);
    expect(graph.getAdjacencyMatrix()).toEqual(adjMat);

    graph.removeEdge(0, 1);
    const graphAdjMat = graph.getAdjacencyMatrix();
    expect(graph.getSize()).toBe(vertices.length);
    expect(graph.getVertices()).toEqual(vertices);
    expect(graphAdjMat[0][1]).toBe(0);
    expect(graphAdjMat[1][0]).toBe(0);
  });

  it('test AdjacencyMatrixGraph addVertex()', () => {
    expect(graph.getSize()).toBe(vertices.length);
    expect(graph.getVertices()).toEqual(vertices);
    expect(graph.getAdjacencyMatrix()).toEqual(adjMat);

    graph.addVertex(6);
    const graphAdjMat = graph.getAdjacencyMatrix();
    expect(graph.getSize()).toBe(vertices.length + 1);
    expect(graph.getVertices()).toEqual([...vertices, 6]);
    expect(graphAdjMat[5]).toEqual([0, 0, 0, 0, 0, 0]);
    expect(graphAdjMat[0][5]).toBe(0);
    expect(graphAdjMat[1][5]).toBe(0);
    expect(graphAdjMat[3][5]).toBe(0);
  });

  it('test AdjacencyMatrixGraph removeVertex()', () => {
    expect(graph.getSize()).toBe(vertices.length);
    expect(graph.getVertices()).toEqual(vertices);
    expect(graph.getAdjacencyMatrix()).toEqual(adjMat);

    graph.removeVertex(-1);
    expect(graph.getSize()).toBe(vertices.length);
    expect(graph.getVertices()).toEqual(vertices);
    expect(graph.getAdjacencyMatrix()).toEqual(adjMat);

    graph.removeVertex(6);
    expect(graph.getSize()).toBe(vertices.length);
    expect(graph.getVertices()).toEqual(vertices);
    expect(graph.getAdjacencyMatrix()).toEqual(adjMat);


    graph.removeVertex(1);
    const graphAdjMat = graph.getAdjacencyMatrix();
    const newVertices = [1, 2, 5, 4];
    const newAdjMat = [
      [0, 0, 1, 0],
      [0, 0, 1, 1],
      [1, 1, 0, 1],
      [0, 1, 1, 0]
    ];
    expect(graph.getSize()).toBe(newVertices.length);
    expect(graph.getVertices()).toEqual(newVertices);
    expect(graphAdjMat).toEqual(newAdjMat);
  });

  it('test AdjacencyMatrixGraph getSize() and getVertices()', () => {
    expect(graph.getSize()).toBe(vertices.length);
    expect(graph.getVertices()).toEqual(vertices);

    graph.addVertex(6);
    expect(graph.getSize()).toBe(vertices.length + 1);
    expect(graph.getVertices()).toEqual([...vertices, 6]);

    graph.addVertex(7);
    graph.addVertex(8);
    expect(graph.getSize()).toBe(vertices.length + 3);
    expect(graph.getVertices()).toEqual([...vertices, 6, 7, 8]);

    graph.removeVertex(5);
    expect(graph.getSize()).toBe(vertices.length + 2);
    expect(graph.getVertices()).toEqual([...vertices, 7, 8]);
  });

  it('test AdjacencyMatrixGraph getAdjacencyMatrix()', () => {
    expect(graph.getSize()).toBe(vertices.length);
    expect(graph.getVertices()).toEqual(vertices);
    expect(graph.getAdjacencyMatrix()).toEqual(adjMat);

    graph.addVertex(6);
    const graphAdjMat = graph.getAdjacencyMatrix();
    expect(graph.getSize()).toBe(vertices.length + 1);
    expect(graph.getVertices()).toEqual([...vertices, 6]);
    expect(graphAdjMat[5]).toEqual([0, 0, 0, 0, 0, 0]);
    expect(graphAdjMat[0][5]).toBe(0);
    expect(graphAdjMat[1][5]).toBe(0);
    expect(graphAdjMat[3][5]).toBe(0);

    graph.removeVertex(5);
    expect(graph.getSize()).toBe(vertices.length);
    expect(graph.getVertices()).toEqual(vertices);
    expect(graph.getAdjacencyMatrix()).toEqual(adjMat);
  });

  it('test AdjacencyMatrixGraph checkIndex()', () => {
    expect(graph.getSize()).toBe(5);
    
    expect(graph.checkIndex(0, 0)).toBe(false);
    expect(graph.checkIndex(1, 1)).toBe(false);

    expect(graph.checkIndex(-1, 0)).toBe(false);
    expect(graph.checkIndex(0, -2)).toBe(false);
    expect(graph.checkIndex(4, -6)).toBe(false);
    expect(graph.checkIndex(-6, 4)).toBe(false);

    expect(graph.checkIndex(0, 1)).toBe(true);
    expect(graph.checkIndex(0, 4)).toBe(true);
    expect(graph.checkIndex(1, 0)).toBe(true);
    expect(graph.checkIndex(4, 0)).toBe(true);
  });
});

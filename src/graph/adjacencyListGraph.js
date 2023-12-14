export default class AdjacencyListGraph {
  constructor(edges) {
    this._adjList = new Map();
    this.init(edges);
  }
  addEdge(v1, v2) {
    if (!this.checkEdge(v1, v2)) {
      return;
    }
    this._adjList.get(v1).push(v2);
    this._adjList.get(v2).push(v1);
  }
  removeEdge(v1, v2) {
    if (!this.checkEdge(v1, v2)) {
      return;
    }
    const v1List = this._adjList.get(v1);
    const v2List = this._adjList.get(v2);
    v1List.splice(v1List.indexOf(v2), 1);
    v2List.splice(v2List.indexOf(v1), 1);
  }
  addVertex(vertex) {
    if (this._adjList.has(vertex)) {
      return;
    }
    this._adjList.set(vertex, []);
  }
  removeVertex(vertex) {
    if (!this._adjList.has(vertex)) {
      return;
    }
    this._adjList.delete(vertex);
    for (const list of this._adjList.values()) {
      const findIndex = list.findIndex(item => item === vertex);
      if (findIndex !== -1) {
        list.splice(findIndex, 1);
      }
    }
  }
  getSize() {
    return this._adjList.size;
  }
  getAdjacencyList() {
    return this._adjList;
  }
  bfs(graph) {

  }
  init(edges) {
    for (const edge of edges) {
      const [v1, v2] = edge;
      this.addVertex(v1);
      this.addVertex(v2);
      this.addEdge(v1, v2);
    }
  }
  checkEdge(v1, v2) {
    return this._adjList.has(v1) && this._adjList.has(v2) && v1 !== v2;
  }
}
export default class AdjacencyMatrixGraph {
  constructor(vertices, edges) {
    this._vertices = [];
    this._adjMat = [];
    this.init(vertices, edges);
  }
  addEdge(i, j) {
    if (!this.checkIndex(i, j)) {
      return;
    }
    this._adjMat[i][j] = 1;
    this._adjMat[j][i] = 1;
  }
  removeEdge(i, j) {
    if (!this.checkIndex(i, j)) {
      return;
    }
    this._adjMat[i][j] = 0;
    this._adjMat[j][i] = 0;
  }
  addVertex(vertex) {
    const size = this.getSize();
    const newRow = [];
    this._vertices.push(vertex);
    for (let i = 0; i < size; i++) {
      newRow.push(0);
    }
    this._adjMat.push(newRow);
    for (const row of this._adjMat) {
      row.push(0);
    }
  }
  removeVertex(i) {
    if (i < 0 || i >= this.getSize()) {
      return;
    }
    this._vertices.splice(i, 1);
    this._adjMat.splice(i, 1);
    for (const row of this._adjMat) {
      row.splice(i, 1);
    }
  }
  getSize() {
    return this._vertices.length;
  }
  getVertices() {
    return this._vertices;
  }
  getAdjacencyMatrix() {
    return this._adjMat;
  }
  init(vertices, edges) {
    // 添加顶点
    for (const vertex of vertices) {
      this.addVertex(vertex);
    }
    // 添加边
    for (const edge of edges) {
      this.addEdge(edge[0], edge[1]);
    }
  }
  checkIndex(i, j) {
    const size = this.size;
    return !(i < 0 || j < 0 || i >= size || j >= size || i === j);
  }
}
// 基于邻接表实现的广度优先遍历
export default function graphBFS(graph, startVertex) {
  const result = [];
  const visited = new Set();
  const queue = [startVertex];
  const adjList = graph.getAdjacencyList();
  visited.add(startVertex);

  while(queue.length > 0) {
    const vertex = queue.shift();
    const list = adjList.get(vertex);
    result.push(vertex);

    for (const adjVertex of list) {
      if (visited.has(adjVertex)) {
        continue;
      }
      queue.push(adjVertex);
      visited.add(adjVertex);
    }
  }
  return result;
}
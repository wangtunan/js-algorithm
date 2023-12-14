// 基于邻接表实现的深度优先遍历
function DFS(graph, visited, result, startVertex) {
  const adjList = graph.getAdjacencyList();
  const list = adjList.get(startVertex);
  result.push(startVertex);
  visited.add(startVertex);

  for (const adjVertex of list) {
    if (visited.has(adjVertex)) {
      continue;
    }
    DFS(graph, visited, result, adjVertex);
  }
}
export default function graphDFS(graph, startVertex) {
  const result = [];
  const visited = new Set();
  DFS(graph, visited, result, startVertex);
  return result;
}


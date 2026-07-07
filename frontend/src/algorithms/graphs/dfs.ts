import type { GraphStep } from "../../types/steps";
import type { Graph } from "./bfs"; 

export function dfs(graph: Graph, startNode: string): GraphStep[] {
  const steps: GraphStep[] = [];
  const visited: string[] = [];
  const traversalOrder: string[] = [];
  const stack: string[] = [startNode];

  steps.push({
    visited: [...visited],
    stack: [...stack],
    traversalOrder: [...traversalOrder],
    message: `Starting DFS from node ${startNode}`,
  });

         visited.push(startNode);


    while (stack.length > 0) {
    const current = stack.pop()!;
    traversalOrder.push(current);

    steps.push({
      visited: [...visited],
      currentNode: current,
      stack: [...stack],
      traversalOrder: [...traversalOrder],
      message: `Visiting node ${current}`,
    });

    for (const neighbor of graph[current] || []) {
      if (!visited.includes(neighbor)) {
        visited.push(neighbor);
        stack.push(neighbor);

        steps.push({
          visited: [...visited],
          currentNode: current,
          stack: [...stack],
          traversalOrder: [...traversalOrder],
          message: `Discovered neighbor ${neighbor}`,
        });
      }
    }
  }

  steps.push({
    visited: [...visited],
    stack: [],
    traversalOrder: [...traversalOrder],
    message: "DFS complete",
  });

  return steps;
}
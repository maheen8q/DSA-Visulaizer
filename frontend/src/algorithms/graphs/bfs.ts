import type { GraphStep } from "../../types/steps";

export type Graph = Record<string, string[]>;

export function bfs(graph: Graph, startNode: string): GraphStep[] {
  const steps: GraphStep[] = [];
  const visited: string[] = [];
  const traversalOrder: string[] = [];
  const queue: string[] = [startNode];

  steps.push({
    visited: [...visited],
    queue: [...queue],
    traversalOrder: [...traversalOrder],
    message: `Starting BFS from node ${startNode}`,
  });

  visited.push(startNode);

  while (queue.length > 0) {
    const current = queue.shift()!;
    traversalOrder.push(current);

    steps.push({
      visited: [...visited],
      currentNode: current,
      queue: [...queue],
      traversalOrder: [...traversalOrder],
      message: `Visiting node ${current}`,
    });

    for (const neighbor of graph[current] || []) {
      if (!visited.includes(neighbor)) {
        visited.push(neighbor);
        queue.push(neighbor);

        steps.push({
          visited: [...visited],
          currentNode: current,
          queue: [...queue],
          traversalOrder: [...traversalOrder],
          message: `Discovered neighbor ${neighbor}`,
        });
      }
    }
  }

  steps.push({
    visited: [...visited],
    queue: [],
    traversalOrder: [...traversalOrder],
    message: "BFS complete",
  });

  return steps;
}
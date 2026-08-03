import type { GraphStep } from "../../types/steps";

type Graph = Record<string, string[]>;

// Computes evenly-spaced positions around a circle, based on however many
// nodes actually exist, no more hardcoding coordinates per node.
function computeNodePositions(nodeIds: string[]): Record<string, { x: number; y: number }> {
  const centerX = 150;
  const centerY = 150;
  const radius = 100;
  const positions: Record<string, { x: number; y: number }> = {};

  nodeIds.forEach((id, index) => {
    const angle = (index / nodeIds.length) * 2 * Math.PI;
    positions[id] = {
      x: centerX + radius * Math.cos(angle),
      y: centerY + radius * Math.sin(angle),
    };
  });

  return positions;
}

// avoids drawing A-B and B-A as two separate lines.
function computeEdges(graph: Graph): [string, string][] {
  const edges: [string, string][] = [];

  Object.entries(graph).forEach(([from, neighbors]) => {
    neighbors.forEach((to) => {
      const alreadyExists = edges.some(
        ([a, b]) => (a === from && b === to) || (a === to && b === from)
      );
      if (!alreadyExists) {
        edges.push([from, to]);
      }
    });
  });

  return edges;
}

type GraphCanvasProps = {
  step: GraphStep;
  graph: Graph;
};

export default function GraphCanvas({ step, graph }: GraphCanvasProps) {
  const nodePositions = computeNodePositions(Object.keys(graph));
  const edges = computeEdges(graph);

  return (
    <svg width="300" height="300" className="bg-gray-950 rounded-xl">
      {/* Draw edges first, so nodes appear on top of them */}
      {edges.map(([from, to]) => {
        const start = nodePositions[from];
        const end = nodePositions[to];
        return (
          <line
            key={`${from}-${to}`}
            x1={start.x}
            y1={start.y}
            x2={end.x}
            y2={end.y}
            stroke="#475569"
            strokeWidth={2}
          />
        );
      })}

      {/* Draw nodes on top */}
      {Object.entries(nodePositions).map(([id, pos]) => {
        const isVisited = step.visited.includes(id);
        const isCurrent = step.currentNode === id;

        let fill = "#334155"; // default: unvisited
        if (isVisited) fill = "#facc15"; // visited: yellow
        if (isCurrent) fill = "#f97316"; // current: orange, overrides visited color

        return (
          <g key={id}>
            <circle
              cx={pos.x}
              cy={pos.y}
              r={20}
              fill={fill}
              className="transition-colors duration-300"
            />
            <text
              x={pos.x}
              y={pos.y}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="white"
              fontSize={14}
              fontWeight="bold"
            >
              {id}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
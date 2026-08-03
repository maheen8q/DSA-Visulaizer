import type { GraphStep } from "../../types/steps";

// Hardcoded positions for our test graph — later this could be computed automatically,
// but for now we just need something to look at.
const nodePositions: Record<string, { x: number; y: number }> = {
  A: { x: 150, y: 50 },
  B: { x: 50, y: 150 },
  C: { x: 250, y: 150 },
  D: { x: 50, y: 250 },
};

const edges: [string, string][] = [
  ["A", "B"],
  ["A", "C"],
  ["B", "D"],
];

type GraphCanvasProps = {
  step: GraphStep;
};

export default function GraphCanvas({ step }: GraphCanvasProps) {
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
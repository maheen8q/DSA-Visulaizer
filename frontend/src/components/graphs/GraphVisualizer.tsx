import { useState, useMemo } from "react";
import GraphCanvas from "./GraphCanvas";
import GraphControls from "./GraphControls";
import { bfs } from "../../algorithms/graphs/bfs";
import { dfs } from "../../algorithms/graphs/dfs";

type GraphVisualizerProps = {
  algorithmId: string;
};

// Same test graph we used earlier — later this can come from user input
const testGraph = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A"],
  D: ["B"],
};

export default function GraphVisualizer({ algorithmId }: GraphVisualizerProps) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  // useMemo avoids recomputing BFS on every render, only reruns if algorithmId changes
  const steps = useMemo(() => {
    if (algorithmId === "bfs") {
      return bfs(testGraph, "A");
    }
   if (algorithmId === "dfs") {
  return dfs(testGraph, "A");
}
    return [];
  }, [algorithmId]);

  if (steps.length === 0) {
    return <p className="text-gray-400">No steps available for this algorithm yet.</p>;
  }

  const currentStep = steps[currentStepIndex];

  return (
    <div className="flex flex-col items-center gap-6">
      <GraphCanvas step={currentStep} />
      <GraphControls
        currentStep={currentStepIndex}
        totalSteps={steps.length}
        onPrev={() => setCurrentStepIndex((s) => Math.max(0, s - 1))}
        onNext={() => setCurrentStepIndex((s) => Math.min(steps.length - 1, s + 1))}
      />
      <p className="text-sm text-gray-300 italic">{currentStep.message}</p>
    </div>
  );
}
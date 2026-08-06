import { useState, useMemo, useEffect } from "react";
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
  B: ["A", "D", "E"],
  C: ["A", "F"],
  D: ["B"],
  E: ["B", "F"],
  F: ["C", "E"],
};

export default function GraphVisualizer({ algorithmId }: GraphVisualizerProps) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [startNode, setStartNode] = useState("A");
  const [isPlaying, setIsPlaying] = useState(false);

  // useMemo avoids recomputing BFS on every render, only reruns if algorithmId changes
  const steps = useMemo(() => {
    if (algorithmId === "bfs") {
      return bfs(testGraph, startNode);
    }
   if (algorithmId === "dfs") {
  return dfs(testGraph, startNode);
}
    return [];
  }, [algorithmId, startNode]);

   useEffect(() => {
    // Reset to the first step whenever the algorithm changes
    setCurrentStepIndex(0);
  }, [startNode]);

  const currentStep = steps[currentStepIndex];


  useEffect(() => {
  if (!isPlaying) return;

  const interval = setInterval(() => {
    setCurrentStepIndex((prev) => {
      if (prev >= steps.length - 1) {
        setIsPlaying(false); // stop playing once we hit the last step
        return prev;
      }
      return prev + 1;
    });
  }, 800); // milliseconds between steps — adjust to taste

  return () => clearInterval(interval); // cleanup: stop the timer if isPlaying changes or component unmounts
}, [isPlaying, steps]);

  if (steps.length === 0) {
    return <p className="text-gray-400">No steps available for this algorithm yet.</p>;
  }



  return (
    <div className="flex flex-col items-center gap-6">

    <select
  value={startNode}
  onChange={(e) => setStartNode(e.target.value)}
  className="px-3 py-2 bg-slate-700 text-white rounded"
>
  {Object.keys(testGraph).map((node) => (
    <option key={node} value={node}>
      {node}
    </option>
  ))}
</select>

      <GraphCanvas step={currentStep} graph={testGraph} />
      <GraphControls
        currentStep={currentStepIndex}
        totalSteps={steps.length}
        onPrev={() => setCurrentStepIndex((s) => Math.max(0, s - 1))}
        onNext={() => setCurrentStepIndex((s) => Math.min(steps.length - 1, s + 1))}
      />
       

<button
  onClick={() => {
    if (currentStepIndex >= steps.length - 1) {
      setCurrentStepIndex(0);
    }
    setIsPlaying((p) => !p);
  }}
  className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
>
  {isPlaying ? "Pause" : "Play"}
</button>


      <p className="text-sm text-gray-300 italic">{currentStep.message}</p>
    </div>
  );
}
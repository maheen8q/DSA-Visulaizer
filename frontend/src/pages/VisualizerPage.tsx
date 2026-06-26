import { useParams } from "react-router-dom";
import { getById } from "../data/algorithms";

// Each person plugs their visualizer in here as they build it
// import SortingVisualizer from "../components/sorting/SortingVisualizer";

export default function VisualizerPage() {
  const { algorithmId } = useParams<{ algorithmId: string }>();
  const meta = algorithmId ? getById(algorithmId) : null;

  if (!meta) {
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-400">
        Algorithm not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex flex-col">

      {/* Top bar */}
      <header className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 px-6 py-3 flex items-center gap-4">
        <a href="/explore" className="text-sm text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
          ← Explore
        </a>
        <h1 className="text-base font-medium text-gray-900 dark:text-gray-100">{meta.name}</h1>
        <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 capitalize">
          {meta.difficulty}
        </span>
      </header>

      {/* Main layout: canvas (left) + panels (right) */}
      <div className="flex flex-1 gap-0 overflow-hidden">

        {/* ── CANVAS AREA ── each visualizer renders here */}
        <main className="flex-1 flex items-center justify-center p-8">
          {/* TODO: swap this placeholder for the real visualizer component */}
          <div className="text-gray-300 dark:text-gray-700 text-sm border-2 border-dashed border-gray-200 dark:border-gray-800 rounded-2xl w-full h-96 flex items-center justify-center">
            {meta.name} visualizer coming soon
          </div>
        </main>

        {/* ── RIGHT PANEL ── controls + explanation + theory */}
        <aside className="w-80 border-l border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 flex flex-col gap-0 overflow-y-auto">

          {/* Input panel slot */}
          <section className="p-4 border-b border-gray-100 dark:border-gray-800">
            <p className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-3">Input</p>
            {/* TODO: InputPanel goes here */}
            <div className="h-16 rounded-lg bg-gray-50 dark:bg-gray-800" />
          </section>

          {/* Playback controls slot */}
          <section className="p-4 border-b border-gray-100 dark:border-gray-800">
            <p className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-3">Controls</p>
            {/* TODO: PlaybackControls goes here once visualizer is wired up */}
            <div className="h-24 rounded-lg bg-gray-50 dark:bg-gray-800" />
          </section>

          {/* Explanation panel slot */}
          <section className="p-4 border-b border-gray-100 dark:border-gray-800">
            <p className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-3">Step</p>
            {/* TODO: ExplanationPanel goes here */}
            <div className="h-16 rounded-lg bg-gray-50 dark:bg-gray-800" />
          </section>

          {/* Theory panel */}
          <section className="p-4">
            <p className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-3">Complexity</p>
            <div className="text-sm space-y-1.5 text-gray-600 dark:text-gray-400">
              <div className="flex justify-between">
                <span>Best</span><span className="font-mono text-xs">{meta.timeComplexity.best}</span>
              </div>
              <div className="flex justify-between">
                <span>Average</span><span className="font-mono text-xs">{meta.timeComplexity.average}</span>
              </div>
              <div className="flex justify-between">
                <span>Worst</span><span className="font-mono text-xs">{meta.timeComplexity.worst}</span>
              </div>
              <div className="flex justify-between pt-1 border-t border-gray-100 dark:border-gray-800">
                <span>Space</span><span className="font-mono text-xs">{meta.spaceComplexity}</span>
              </div>
            </div>
          </section>

        </aside>
      </div>
    </div>
  );
}

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { algorithms } from "../data/algorithms";
import type { Category } from "../types/algorithm";

const CATEGORIES: { id: Category | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "sorting", label: "Sorting" },
  { id: "searching", label: "Searching" },
  { id: "data-structures", label: "Data Structures" },
  { id: "graphs", label: "Graphs" },
];

const DIFFICULTY_COLOR = {
  easy:   "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300",
  medium: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300",
  hard:   "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300",
};

export default function ExplorerPage() {
  const [activeCategory, setActiveCategory] = useState<Category | "all">("all");
  const navigate = useNavigate();

  const filtered = activeCategory === "all"
    ? algorithms
    : algorithms.filter((a) => a.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 px-6 py-10">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-1">Explore</h1>
        <p className="text-sm text-gray-400 mb-8">Pick an algorithm to visualize</p>

        {/* Category filter */}
        <div className="flex gap-2 mb-8 flex-wrap">
          {CATEGORIES.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveCategory(c.id)}
              className={`px-4 py-1.5 rounded-full text-sm transition ${
                activeCategory === c.id
                  ? "bg-indigo-600 text-white"
                  : "bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-indigo-300"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Algorithm grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((algo) => (
            <div
              key={algo.id}
              onClick={() => navigate(`/visualizer/${algo.id}`)}
              className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-5 cursor-pointer hover:border-indigo-300 dark:hover:border-indigo-700 hover:shadow-sm transition group"
            >
              <div className="flex items-start justify-between mb-2">
                <h2 className="text-sm font-medium text-gray-900 dark:text-gray-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition">
                  {algo.name}
                </h2>
                <span className={`text-xs px-2 py-0.5 rounded-full capitalize ${DIFFICULTY_COLOR[algo.difficulty]}`}>
                  {algo.difficulty}
                </span>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed mb-3">{algo.description}</p>
              <div className="flex gap-3 text-xs text-gray-400 font-mono">
                <span title="Average time complexity">{algo.timeComplexity.average}</span>
                <span>·</span>
                <span title="Space complexity">{algo.spaceComplexity}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import { useNavigate } from "react-router-dom";

const CATEGORIES = [
  { label: "Sorting",          desc: "Bubble, Merge, Quick, and more",   path: "/explore?cat=sorting",          emoji: "↕" },
  { label: "Searching",        desc: "Linear and Binary search",          path: "/explore?cat=searching",        emoji: "🔍" },
  { label: "Data Structures",  desc: "Stack, Queue, Linked List",         path: "/explore?cat=data-structures",  emoji: "🗂" },
  { label: "Graphs",           desc: "BFS and DFS traversal",             path: "/explore?cat=graphs",           emoji: "🕸" },
];

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex flex-col items-center justify-center px-6 py-20">

      {/* Hero */}
      <div className="text-center max-w-xl mb-14">
        <h1 className="text-4xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          DSA Visualizer
        </h1>
        <p className="text-gray-400 text-base leading-relaxed">
          Learn data structures and algorithms by watching them run — step by step, at your own pace.
        </p>
        <button
          onClick={() => navigate("/explore")}
          className="mt-8 px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm rounded-xl transition"
        >
          Start Visualizing →
        </button>
      </div>

      {/* Category cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl w-full">
        {CATEGORIES.map((c) => (
          <div
            key={c.label}
            onClick={() => navigate(c.path)}
            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-5 cursor-pointer hover:border-indigo-300 dark:hover:border-indigo-700 hover:shadow-sm transition text-center"
          >
            <div className="text-2xl mb-2">{c.emoji}</div>
            <div className="text-sm font-medium text-gray-800 dark:text-gray-200">{c.label}</div>
            <div className="text-xs text-gray-400 mt-1">{c.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

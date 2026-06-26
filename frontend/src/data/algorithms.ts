import type { AlgorithmMeta } from "../types/algorithm";

export const algorithms: AlgorithmMeta[] = [
  // ── SORTING ────────────────────────────────────────────────────────────────
  {
    id: "bubble-sort",
    name: "Bubble Sort",
    category: "sorting",
    difficulty: "easy",
    description: "Repeatedly compares adjacent elements and swaps them if they are in the wrong order.",
    timeComplexity: { best: "O(n)", average: "O(n²)", worst: "O(n²)" },
    spaceComplexity: "O(1)",
    pseudocode: [
      "for i from 0 to n-1:",
      "  for j from 0 to n-i-2:",
      "    if arr[j] > arr[j+1]:",
      "      swap(arr[j], arr[j+1])",
    ],
  },
  {
    id: "selection-sort",
    name: "Selection Sort",
    category: "sorting",
    difficulty: "easy",
    description: "Finds the minimum element and places it at the beginning, repeating for the remaining array.",
    timeComplexity: { best: "O(n²)", average: "O(n²)", worst: "O(n²)" },
    spaceComplexity: "O(1)",
  },
  {
    id: "insertion-sort",
    name: "Insertion Sort",
    category: "sorting",
    difficulty: "easy",
    description: "Builds a sorted array one element at a time by inserting each into its correct position.",
    timeComplexity: { best: "O(n)", average: "O(n²)", worst: "O(n²)" },
    spaceComplexity: "O(1)",
  },
  {
    id: "merge-sort",
    name: "Merge Sort",
    category: "sorting",
    difficulty: "medium",
    description: "Divides the array in half, sorts each half, then merges them back together.",
    timeComplexity: { best: "O(n log n)", average: "O(n log n)", worst: "O(n log n)" },
    spaceComplexity: "O(n)",
  },
  {
    id: "quick-sort",
    name: "Quick Sort",
    category: "sorting",
    difficulty: "medium",
    description: "Picks a pivot, partitions the array around it, and recursively sorts each partition.",
    timeComplexity: { best: "O(n log n)", average: "O(n log n)", worst: "O(n²)" },
    spaceComplexity: "O(log n)",
  },
  // ── SEARCHING ──────────────────────────────────────────────────────────────
  {
    id: "linear-search",
    name: "Linear Search",
    category: "searching",
    difficulty: "easy",
    description: "Checks each element one by one until the target is found or the array ends.",
    timeComplexity: { best: "O(1)", average: "O(n)", worst: "O(n)" },
    spaceComplexity: "O(1)",
  },
  {
    id: "binary-search",
    name: "Binary Search",
    category: "searching",
    difficulty: "easy",
    description: "Repeatedly halves a sorted array to zero in on the target value.",
    timeComplexity: { best: "O(1)", average: "O(log n)", worst: "O(log n)" },
    spaceComplexity: "O(1)",
  },
  // ── DATA STRUCTURES ────────────────────────────────────────────────────────
  {
    id: "stack",
    name: "Stack",
    category: "data-structures",
    difficulty: "easy",
    description: "A LIFO structure where elements are pushed and popped from the top.",
    timeComplexity: { best: "O(1)", average: "O(1)", worst: "O(1)" },
    spaceComplexity: "O(n)",
  },
  {
    id: "queue",
    name: "Queue",
    category: "data-structures",
    difficulty: "easy",
    description: "A FIFO structure where elements are added at the rear and removed from the front.",
    timeComplexity: { best: "O(1)", average: "O(1)", worst: "O(1)" },
    spaceComplexity: "O(n)",
  },
  {
    id: "linked-list",
    name: "Linked List",
    category: "data-structures",
    difficulty: "medium",
    description: "A chain of nodes where each node holds a value and a pointer to the next node.",
    timeComplexity: { best: "O(1)", average: "O(n)", worst: "O(n)" },
    spaceComplexity: "O(n)",
  },
  // ── GRAPHS ─────────────────────────────────────────────────────────────────
  {
    id: "bfs",
    name: "Breadth-First Search",
    category: "graphs",
    difficulty: "medium",
    description: "Explores a graph level by level using a queue, visiting all neighbours before going deeper.",
    timeComplexity: { best: "O(V+E)", average: "O(V+E)", worst: "O(V+E)" },
    spaceComplexity: "O(V)",
  },
  {
    id: "dfs",
    name: "Depth-First Search",
    category: "graphs",
    difficulty: "medium",
    description: "Explores as far as possible along each branch before backtracking, using a stack.",
    timeComplexity: { best: "O(V+E)", average: "O(V+E)", worst: "O(V+E)" },
    spaceComplexity: "O(V)",
  },
];

export const getByCategory = (category: string) =>
  algorithms.filter((a) => a.category === category);

export const getById = (id: string) =>
  algorithms.find((a) => a.id === id) ?? null;

// ─── SORTING ────────────────────────────────────────────────────────────────
export type SortingStep = {
  array: number[];
  comparedIndices?: number[];
  swappedIndices?: number[];
  sortedIndices?: number[];
  pivotIndex?: number;
  mergeRange?: [number, number];
  message: string;
};

// ─── SEARCHING ───────────────────────────────────────────────────────────────
export type SearchStep = {
  array: number[];
  currentIndex?: number;
  low?: number;
  mid?: number;
  high?: number;
  foundIndex?: number;
  eliminatedRange?: [number, number];
  message: string;
};

// ─── STACK ───────────────────────────────────────────────────────────────────
export type StackStep = {
  items: number[];
  operation: "push" | "pop" | "peek" | "idle";
  affectedIndex?: number;
  message: string;
};

// ─── QUEUE ───────────────────────────────────────────────────────────────────
export type QueueStep = {
  items: number[];
  operation: "enqueue" | "dequeue" | "front" | "idle";
  affectedIndex?: number;
  message: string;
};

// ─── LINKED LIST ─────────────────────────────────────────────────────────────
export type LinkedListNode = {
  value: number;
  id: string;
};

export type LinkedListStep = {
  nodes: LinkedListNode[];
  operation: "insert-head" | "insert-tail" | "delete" | "traverse" | "idle";
  highlightedId?: string;
  newNodeId?: string;
  message: string;
};

// ─── GRAPH ───────────────────────────────────────────────────────────────────
export type GraphStep = {
  visited: string[];
  currentNode?: string;
  queue?: string[];   // BFS
  stack?: string[];   // DFS
  traversalOrder: string[];
  message: string;
};

// ─── UNION ───────────────────────────────────────────────────────────────────
export type AnyStep =
  | SortingStep
  | SearchStep
  | StackStep
  | QueueStep
  | LinkedListStep
  | GraphStep;

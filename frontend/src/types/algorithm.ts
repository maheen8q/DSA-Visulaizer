export type Category = "sorting" | "searching" | "data-structures" | "graphs";

export type Difficulty = "easy" | "medium" | "hard";

export type ComplexityInfo = {
  best: string;
  average: string;
  worst: string;
};

export type AlgorithmMeta = {
  id: string;           // e.g. "bubble-sort"
  name: string;         // e.g. "Bubble Sort"
  category: Category;
  difficulty: Difficulty;
  description: string;
  timeComplexity: ComplexityInfo;
  spaceComplexity: string;
  pseudocode?: string[];
  tags?: string[];
};

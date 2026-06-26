from pydantic import BaseModel
from typing import Literal, Optional, List

Category = Literal["sorting", "searching", "data-structures", "graphs"]
Difficulty = Literal["easy", "medium", "hard"]

class ComplexityInfo(BaseModel):
    best: str
    average: str
    worst: str

class AlgorithmMeta(BaseModel):
    id: str
    name: str
    category: Category
    difficulty: Difficulty
    description: str
    timeComplexity: ComplexityInfo
    spaceComplexity: str
    pseudocode: Optional[List[str]] = None
    tags: Optional[List[str]] = None

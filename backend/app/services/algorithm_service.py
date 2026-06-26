import json
from pathlib import Path
from typing import List, Optional
from app.schemas.algorithm import AlgorithmMeta

DATA_FILE = Path(__file__).parent.parent / "data" / "algorithms.json"

def _load() -> List[dict]:
    with open(DATA_FILE) as f:
        return json.load(f)

def get_all() -> List[AlgorithmMeta]:
    return [AlgorithmMeta(**a) for a in _load()]

def get_by_id(algorithm_id: str) -> Optional[AlgorithmMeta]:
    for a in _load():
        if a["id"] == algorithm_id:
            return AlgorithmMeta(**a)
    return None

def get_by_category(category: str) -> List[AlgorithmMeta]:
    return [AlgorithmMeta(**a) for a in _load() if a["category"] == category]

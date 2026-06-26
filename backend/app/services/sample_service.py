import json
from pathlib import Path
from typing import Optional

DATA_FILE = Path(__file__).parent.parent / "data" / "samples.json"

def _load() -> dict:
    with open(DATA_FILE) as f:
        return json.load(f)

def get_samples(algorithm_id: str) -> Optional[dict]:
    data = _load()
    return data.get(algorithm_id)

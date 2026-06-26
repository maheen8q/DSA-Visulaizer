from fastapi import APIRouter

router = APIRouter()

CATEGORIES = [
    {"id": "sorting",          "name": "Sorting"},
    {"id": "searching",        "name": "Searching"},
    {"id": "data-structures",  "name": "Data Structures"},
    {"id": "graphs",           "name": "Graphs"},
]

@router.get("/categories")
def get_categories():
    return CATEGORIES

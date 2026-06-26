from fastapi import APIRouter, HTTPException
from app.services import algorithm_service

router = APIRouter()

@router.get("/algorithms")
def get_all():
    return algorithm_service.get_all()

@router.get("/algorithms/{algorithm_id}")
def get_one(algorithm_id: str):
    algo = algorithm_service.get_by_id(algorithm_id)
    if not algo:
        raise HTTPException(status_code=404, detail="Algorithm not found")
    return algo

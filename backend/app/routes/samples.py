from fastapi import APIRouter, HTTPException
from app.services import sample_service

router = APIRouter()

@router.get("/samples/{algorithm_id}")
def get_samples(algorithm_id: str):
    data = sample_service.get_samples(algorithm_id)
    if data is None:
        raise HTTPException(status_code=404, detail="No samples for this algorithm")
    return {"algorithmId": algorithm_id, **data}

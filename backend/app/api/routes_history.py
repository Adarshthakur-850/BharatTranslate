from fastapi import APIRouter
from app.schemas.translation_schema import HistoryResponse

router = APIRouter()

# Mocking the history database for now
mock_history = [
    {
        "id": 1,
        "original_text": "Hello, how are you?",
        "translated_text": "नमस्ते, आप कैसे हैं?",
        "source_language": "en",
        "target_language": "hi",
        "inference_time_ms": 120.5,
        "timestamp": "2023-10-01T12:00:00Z"
    }
]

@router.get("/history", response_model=HistoryResponse)
async def get_history(limit: int = 10, offset: int = 0):
    # In a real application, fetch from DB
    return HistoryResponse(
        history=mock_history[offset:offset+limit],
        total=len(mock_history)
    )

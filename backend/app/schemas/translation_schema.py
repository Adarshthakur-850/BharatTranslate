from pydantic import BaseModel, Field
from typing import Optional, List

class TranslationRequest(BaseModel):
    text: str = Field(..., example="Hello, how are you?")
    source_language: str = Field(default="en", example="en", description="ISO language code of source")
    target_language: str = Field(..., example="hi", description="ISO language code of target")

class TranslationResponse(BaseModel):
    translated_text: str
    source_language: str
    target_language: str
    inference_time_ms: float

class HistoryItem(TranslationResponse):
    id: int
    original_text: str
    timestamp: str

class HistoryResponse(BaseModel):
    history: List[HistoryItem]
    total: int

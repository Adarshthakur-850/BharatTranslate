from pydantic import BaseModel, Field

class LanguageDetectRequest(BaseModel):
    text: str = Field(..., example="नमस्ते, आप कैसे हैं?")

class LanguageDetectResponse(BaseModel):
    detected_language: str
    confidence: float

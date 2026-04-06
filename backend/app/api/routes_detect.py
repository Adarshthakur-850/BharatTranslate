from fastapi import APIRouter, HTTPException
from app.schemas.language_schema import LanguageDetectRequest, LanguageDetectResponse
from app.services.language_service import LanguageService

router = APIRouter()

@router.post("/detect-language", response_model=LanguageDetectResponse)
async def detect_language(request: LanguageDetectRequest):
    try:
        service = LanguageService()
        lang, confidence = await service.detect(request.text)
        return LanguageDetectResponse(
            detected_language=lang,
            confidence=confidence
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

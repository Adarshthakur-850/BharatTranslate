from fastapi import APIRouter, HTTPException, Depends
from app.schemas.translation_schema import TranslationRequest, TranslationResponse
from app.services.translation_service import TranslationService
import time

router = APIRouter()

@router.post("/translate", response_model=TranslationResponse)
async def translate_text(
    request: TranslationRequest,
    # In a real app we would inject the service via Depends
):
    start_time = time.time()
    try:
        service = TranslationService()
        result = await service.translate(
            text=request.text,
            src_lang=request.source_language,
            tgt_lang=request.target_language
        )
        inference_time = (time.time() - start_time) * 1000
        
        return TranslationResponse(
            translated_text=result,
            source_language=request.source_language,
            target_language=request.target_language,
            inference_time_ms=inference_time
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

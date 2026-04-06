from app.models.inference import IndicTrans2Inference
from app.services.cache_service import TranslationCache

class TranslationService:
    def __init__(self):
        self.inference = IndicTrans2Inference()
        self.cache = TranslationCache()

    async def translate(self, text: str, src_lang: str, tgt_lang: str) -> str:
        # Check cache first
        cached_result = self.cache.get_translation(text, src_lang, tgt_lang)
        if cached_result:
            return cached_result
            
        # Run inference
        result = self.inference.translate(text, src_lang, tgt_lang)
        
        # Save to cache
        self.cache.set_translation(text, src_lang, tgt_lang, result)
        
        return result

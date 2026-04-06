import re

class LanguageService:
    def __init__(self):
        pass

    async def detect(self, text: str) -> tuple[str, float]:
        # Placeholder naive detection logic
        # In a real app, use something like fasttext or langdetect
        
        # very naive english check
        if re.match(r'^[a-zA-Z\s.,?!]+$', text):
            return "en", 0.95
        
        # very naive hindi check 
        # (devanagari script unicode range)
        if re.search(r'[\u0900-\u097F]', text):
            return "hi", 0.90
            
        return "unknown", 0.0

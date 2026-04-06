class TranslationCache:
    def __init__(self):
        # In-memory mock cache for now
        # Replace with Redis in production
        self._cache = {}

    def _generate_key(self, text: str, src_lang: str, tgt_lang: str) -> str:
        return f"{src_lang}:{tgt_lang}:{hash(text)}"

    def get_translation(self, text: str, src_lang: str, tgt_lang: str) -> str | None:
        key = self._generate_key(text, src_lang, tgt_lang)
        return self._cache.get(key)

    def set_translation(self, text: str, src_lang: str, tgt_lang: str, translated_text: str):
        key = self._generate_key(text, src_lang, tgt_lang)
        self._cache[key] = translated_text

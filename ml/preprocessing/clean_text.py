import re
import unicodedata

def clean_indic_text(text: str) -> str:
    """
    Cleans indic language text by removing zero-width joiners,
    normalizing unicode, and stripping trailing characters.
    """
    if not text:
        return text
    
    # Normalize unicode
    text = unicodedata.normalize('NFKC', text)
    
    # Remove zero width spaces
    text = text.replace('\u200b', '')
    text = text.replace('\u200c', '')
    text = text.replace('\u200d', '')
    
    # Strip whitespace
    text = text.strip()
    return text

if __name__ == "__main__":
    sample = "नमस्ते   \u200b\u200d दुनिया"
    print(f"Original: {repr(sample)}")
    print(f"Cleaned: {repr(clean_indic_text(sample))}")

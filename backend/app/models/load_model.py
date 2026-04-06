import logging
from app.core.config import settings

logger = logging.getLogger("bharat_translate")

class ModelLoader:
    _instance = None
    _model = None
    _tokenizer = None

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super(ModelLoader, cls).__new__(cls)
            cls._instance.load()
        return cls._instance

    def load(self):
        # In a real scenario, this would load weights into VRAM
        logger.info(f"Loading model {settings.MODEL_NAME} on {settings.DEVICE}...")
        self._model = "MockIndicTrans2Model"
        self._tokenizer = "MockSentencePieceTokenizer"
        logger.info("Model loaded successfully.")

    def get_model(self):
        return self._model, self._tokenizer

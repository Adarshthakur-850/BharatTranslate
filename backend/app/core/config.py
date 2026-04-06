from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    PROJECT_NAME: str = "BharatTranslate API"
    VERSION: str = "1.0.0"
    API_V1_STR: str = "/api/v1"
    
    # ML Model Configs
    MODEL_NAME: str = "ai4bharat/indictrans2-en-indic-dist-200M"
    DEVICE: str = "cpu"
    
    # DB
    DATABASE_URL: str = "sqlite:///./bharat_translate.db"
    
    class Config:
        env_file = ".env"

settings = Settings()

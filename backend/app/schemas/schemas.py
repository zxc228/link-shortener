# backend/schemas/schemas.py

from pydantic import BaseModel, AnyHttpUrl
from datetime import datetime

class LinkCreate(BaseModel):
    original_url: AnyHttpUrl

class LinkInfo(BaseModel):
    id: int
    original_url: AnyHttpUrl
    short_key: str
    clicks: int
    created_at: datetime

    class Config:
        orm_mode = True

# backend/app/routers/link_router.py

from fastapi import APIRouter, Depends
from fastapi.responses import RedirectResponse
from sqlalchemy.ext.asyncio import AsyncSession
from app.db.database import get_db
from app.schemas.schemas import LinkCreate, LinkInfo
from app.services.link_service import create_short_link, get_link_by_short_key, increment_clicks

router = APIRouter(
    prefix="/links",
    tags=["Links"],
)

@router.post("/", response_model=LinkInfo)
async def create_link(link: LinkCreate, db: AsyncSession = Depends(get_db)):
    new_link = await create_short_link(link, db)
    return new_link

@router.get("/{short_key}", response_model=LinkInfo)
async def get_link_info(short_key: str, db: AsyncSession = Depends(get_db)):
    link = await get_link_by_short_key(short_key, db)
    return link


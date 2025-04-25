# backend/app/routers/redirect_router.py

from fastapi import APIRouter, Depends
from fastapi.responses import RedirectResponse
from sqlalchemy.ext.asyncio import AsyncSession
from app.db.database import get_db
from app.services.link_service import get_link_by_short_key, increment_clicks

router = APIRouter(
    tags=["Redirect"],
)

@router.get("/r/{short_key}")
async def redirect_to_original(short_key: str, db: AsyncSession = Depends(get_db)):
    link = await get_link_by_short_key(short_key, db)
    await increment_clicks(link, db)
    return RedirectResponse(link.original_url)

# backend/app/services/link_service.py

import string
import random
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select, update
from app.models.models import Link
from app.schemas.schemas import LinkCreate
from fastapi import HTTPException

SHORT_KEY_LENGTH = 6

def generate_short_key(length: int = SHORT_KEY_LENGTH) -> str:
    chars = string.ascii_letters + string.digits
    return ''.join(random.choices(chars, k=length))

async def create_short_link(link_data: LinkCreate, db: AsyncSession) -> Link:
    for _ in range(5):
        short_key = generate_short_key()
        existing = await db.execute(select(Link).where(Link.short_key == short_key))
        if not existing.scalar():
            break
    else:
        raise HTTPException(status_code=500, detail="Failed to generate unique short key")

    new_link = Link(
        original_url=str(link_data.original_url), 
        short_key=short_key
    )

    db.add(new_link)
    await db.commit()
    await db.refresh(new_link)
    return new_link

async def get_link_by_short_key(short_key: str, db: AsyncSession) -> Link:
    result = await db.execute(select(Link).where(Link.short_key == short_key))
    link = result.scalar_one_or_none()
    if not link:
        raise HTTPException(status_code=404, detail="Short link not found")
    return link

async def increment_clicks(link: Link, db: AsyncSession) -> None:
    await db.execute(
        update(Link)
        .where(Link.id == link.id)
        .values(clicks=Link.clicks + 1)
    )
    await db.commit()

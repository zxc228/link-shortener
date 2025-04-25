# backend/app/db/create_db.py

import asyncio
from app.db.database import engine, Base
from app.models import models 

async def init_models():
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)

if __name__ == "__main__":
    asyncio.run(init_models())

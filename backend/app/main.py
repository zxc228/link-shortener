# backend/app/main.py

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers.link_router import router as link_router
from app.routers.redirect_router import router as redirect_router

app = FastAPI(title="Link Shortener")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(link_router)
app.include_router(redirect_router)

@app.get("/")
def root():
    return {"message": "Link Shortener API is running"}

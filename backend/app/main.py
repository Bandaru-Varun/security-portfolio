from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware

from app.core.database import Base, engine, wait_for_db
from app.models import user, refresh_token
from app.api.auth import router as auth_router
from app.api.deps import get_current_user

app = FastAPI(title="Security Portfolio API")


# -----------------------------
# CORS Configuration (FIXED)
# -----------------------------
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # 🔥 allow ALL (fixes your issue instantly)
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# -----------------------------
# Startup Hook
# -----------------------------
@app.on_event("startup")
def startup():
    wait_for_db()
    Base.metadata.create_all(bind=engine)


# -----------------------------
# Routers
# -----------------------------
app.include_router(auth_router)


# -----------------------------
# Public Route
# -----------------------------
@app.get("/")
def root():
    return {"message": "Security Portfolio Backend Running"}


# -----------------------------
# Protected Route
# -----------------------------
@app.get("/protected")
def protected_route(current_user: dict = Depends(get_current_user)):
    return {
        "message": "You are authenticated",
        "user": current_user
    }

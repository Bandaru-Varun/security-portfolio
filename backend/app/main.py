from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware

from app.core.database import Base, engine, wait_for_db
from app.models import user, refresh_token
from app.api.auth import router as auth_router
from app.api.deps import get_current_user


app = FastAPI(title="Security Portfolio API")


# 🔥 CRITICAL: ADD THIS IMMEDIATELY AFTER APP CREATION
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # TEMP: allow everything
    allow_credentials=False,  # IMPORTANT: must be False when using "*"
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("startup")
def startup():
    wait_for_db()
    Base.metadata.create_all(bind=engine)


app.include_router(auth_router)


@app.get("/")
def root():
    return {"message": "Backend Running"}


@app.get("/protected")
def protected_route(current_user: dict = Depends(get_current_user)):
    return {
        "message": "Authenticated",
        "user": current_user
    }

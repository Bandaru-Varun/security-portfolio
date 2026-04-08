from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware

from app.core.database import Base, engine, wait_for_db
from app.models import user, refresh_token
from app.api.auth import router as auth_router
from app.api.deps import get_current_user

app = FastAPI(title="Security Portfolio API")


# -----------------------------
# CORS (STRICT + CORRECT)
# -----------------------------
origins = [
    "https://security-portfolio-rzrv.vercel.app",  # 🔥 your frontend
    "http://localhost:5173",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# -----------------------------
# Startup
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
# Routes
# -----------------------------
@app.get("/")
def root():
    return {"message": "Backend Running"}


@app.get("/protected")
def protected_route(current_user: dict = Depends(get_current_user)):
    return {
        "message": "Authenticated",
        "user": current_user
    }

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from pydantic import BaseModel
from datetime import datetime

from app.schemas.user import UserCreate, UserLogin
from app.services.auth_service import register_user, authenticate_user, login_user
from app.core.database import get_db
from app.models.refresh_token import RefreshToken
from app.core.security import verify_password

router = APIRouter(prefix="/auth", tags=["auth"])


@router.post("/register")
def register(user: UserCreate, db: Session = Depends(get_db)):
    try:
        register_user(db, user.email, user.password)
        return {"message": "User registered successfully"}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))


@router.post("/login")
def login(user: UserLogin, db: Session = Depends(get_db)):
    db_user = authenticate_user(db, user.email, user.password)

    if not db_user:
        raise HTTPException(status_code=401, detail="Invalid credentials")

    return login_user(db, db_user)


class RefreshRequest(BaseModel):
    refresh_token: str


@router.post("/refresh")
def refresh(data: RefreshRequest, db: Session = Depends(get_db)):

    tokens = db.query(RefreshToken).filter(
        RefreshToken.revoked == False
    ).all()

    matched_token = None

    for token in tokens:
        if verify_password(data.refresh_token, token.token_hash):
            matched_token = token
            break

    if not matched_token:
        raise HTTPException(status_code=401, detail="Invalid refresh token")

    if matched_token.expires_at < datetime.utcnow():
        raise HTTPException(status_code=401, detail="Refresh token expired")

    user = matched_token.user

    db.query(RefreshToken).filter(
        RefreshToken.user_id == user.id,
        RefreshToken.revoked == False
    ).update({"revoked": True})

    db.commit()

    return login_user(db, user)


@router.get("/sessions")
def list_sessions(db: Session = Depends(get_db)):

    sessions = db.query(RefreshToken).all()

    return [
        {
            "id": str(s.id),
            "user_id": str(s.user_id),
            "device_id": s.device_id,
            "expires_at": s.expires_at,
            "revoked": s.revoked
        }
        for s in sessions
    ]

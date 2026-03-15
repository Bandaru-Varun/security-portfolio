from sqlalchemy.orm import Session
from datetime import datetime, timedelta
import uuid
import secrets

from app.models.user import User
from app.models.refresh_token import RefreshToken
from app.core.security import hash_password, verify_password
from app.core.jwt import create_access_token


# ---------------------------
# Register User
# ---------------------------
def register_user(db: Session, email: str, password: str):
    existing_user = db.query(User).filter(User.email == email).first()
    if existing_user:
        raise Exception("User already exists")

    new_user = User(
        email=email,
        hashed_password=hash_password(password)
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return new_user


# ---------------------------
# Authenticate User
# ---------------------------
def authenticate_user(db: Session, email: str, password: str):
    user = db.query(User).filter(User.email == email).first()
    if not user:
        return None

    if not verify_password(password, user.hashed_password):
        return None

    return user


# ---------------------------
# Login User (Access + Refresh Token)
# ---------------------------
def login_user(db: Session, user: User):

    # 1️⃣ Create Access Token
    access_token = create_access_token(
        {"sub": str(user.id), "email": user.email}
    )

    # 2️⃣ Create Secure Refresh Token
    raw_refresh_token = secrets.token_urlsafe(64)

    # 3️⃣ Hash before storing in DB
    refresh_token_hash = hash_password(raw_refresh_token)

    # 4️⃣ Set expiry (7 days)
    expires_at = datetime.utcnow() + timedelta(days=7)

    refresh_token = RefreshToken(
        user_id=user.id,
        device_id=str(uuid.uuid4()),  # simple device identifier
        token_hash=refresh_token_hash,
        expires_at=expires_at,
        revoked=False
    )

    db.add(refresh_token)
    db.commit()

    return {
        "access_token": access_token,
        "refresh_token": raw_refresh_token,
        "token_type": "bearer"
    }

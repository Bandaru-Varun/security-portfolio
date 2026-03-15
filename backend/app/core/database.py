from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base
from sqlalchemy.exc import OperationalError
from app.core.config import settings
import time

engine = create_engine(settings.DATABASE_URL)

SessionLocal = sessionmaker(
    autocommit=False,
    autoflush=False,
    bind=engine
)

Base = declarative_base()


def wait_for_db():
    retries = 10
    while retries:
        try:
            with engine.connect():
                return
        except OperationalError:
            retries -= 1
            print("Database not ready, retrying in 2 seconds...")
            time.sleep(2)
    raise Exception("Database connection failed after retries")


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

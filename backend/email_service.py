from fastapi import FastAPI
from fastapi_mail import FastMail, MessageSchema, ConnectionConfig
from pydantic import EmailStr
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

conf = ConnectionConfig(
    MAIL_USERNAME=os.getenv("MAIL_USERNAME"),
    MAIL_PASSWORD=os.getenv("MAIL_PASSWORD"),
    MAIL_FROM=os.getenv("MAIL_FROM"),
    MAIL_PORT=int(os.getenv("MAIL_PORT")),
    MAIL_SERVER=os.getenv("MAIL_SERVER"),
    MAIL_STARTTLS=True,
    MAIL_SSL_TLS=False,
    USE_CREDENTIALS=True
)


@app.get("/")
def root():
    return {"status": "email service running"}


@app.post("/send")
async def send_email(email: EmailStr):

    message = MessageSchema(
        subject="Portfolio Contact",
        recipients=[email],
        body="Someone contacted you from your portfolio",
        subtype="plain"
    )

    fm = FastMail(conf)
    await fm.send_message(message)

    return {"message": "Email sent"}

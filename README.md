# Zero Trust Security Portfolio

Interactive cybersecurity portfolio demonstrating authentication infrastructure, JWT security, and Zero-Trust access control architecture.

This project simulates how modern backend systems authenticate users, validate identity tokens, enforce authorization policies, and protect API resources.

---

## Live Demo

Frontend
https://your-portfolio-url

API Documentation
https://your-backend-url/docs

---

## Key Security Features

• JWT authentication system
• Access & refresh token lifecycle management
• Token expiration validation
• Zero Trust request verification
• Role-based access control (RBAC)
• Attack simulation for token tampering and expiration
• Interactive JWT decoder for token inspection
• Security activity logging dashboard

---

## Tech Stack

Frontend
React (Vite)
TailwindCSS
Framer Motion

Backend
Python
FastAPI
JWT Authentication

Database
PostgreSQL

Infrastructure
Docker
Docker Compose
Linux

---

## System Architecture

Client Request
↓
Authentication Service (FastAPI)
↓
JWT Identity Token
↓
Policy Decision Point (Authorization)
↓
Policy Enforcement Point
↓
Protected Resource

This architecture follows **Zero Trust principles**, where every request must be authenticated and validated before access is granted.

---

## Project Structure

```
security-portfolio

frontend/        React security dashboard
backend/         FastAPI authentication service
docker-compose.yml
README.md
```

---

## Security Demonstrations

Authentication Console
Generate JWT access and refresh tokens.

JWT Decoder
Inspect token headers and payloads.

Attack Simulator
Simulate security events such as:

• Token tampering
• Expired tokens
• Signature verification failures

Security Activity Logs
Displays authentication and security events.

---

## Local Development

Clone repository

```
git clone https://github.com/YOUR_USERNAME/security-portfolio.git
cd security-portfolio
```

Start services

```
docker compose up
```

Frontend

```
cd frontend
npm install
npm run dev
```

Backend

```
cd backend
uvicorn app.main:app --reload
```

---

## Author

Varun Bandaru
Cloud & Security Engineer

GitHub
https://github.com/Bandaru-Varun

LinkedIn
https://linkedin.com/in/varun-bandaru-777b5837b

---

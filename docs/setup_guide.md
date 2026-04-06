# Setup Guide

## Pre-requisites
- Node.js (v18+)
- Python 3.10+
- Docker and Docker Compose

## Quick Start (Docker)
1. Navigate to `deployment/docker`
2. Run `docker-compose up --build -d`
3. The frontend is accessible at `http://localhost:4000`
4. The backend API is accessible at `http://localhost:8000/docs`

## Local Development (Without Docker)

### Backend
1. `cd backend`
2. `python -m venv venv`
3. `venv\Scripts\activate` (Windows) or `source venv/bin/activate` (Mac/Linux)
4. `pip install -r requirements.txt`
5. `uvicorn app.main:app --reload`
*The API will be available at http://localhost:8000*

### Frontend
1. `cd frontend`
2. `npm install`
3. `npm run dev`
*The frontend will be available at http://localhost:5173 (or as specified by Vite)*

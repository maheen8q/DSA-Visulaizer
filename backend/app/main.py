from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes import health, categories, algorithms, samples

app = FastAPI(title="DSA Visualizer API", version="0.1.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Vite dev server
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(health.router)
app.include_router(categories.router)
app.include_router(algorithms.router)
app.include_router(samples.router)

import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from page import router


if __name__ == "__main__":
    app = FastAPI()
    origins = ["*"]

    app.add_middleware(
        CORSMiddleware,
        allow_origins=origins,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )
    app.include_router(router)
    uvicorn.run(app, host="0.0.0.0", port=8000)

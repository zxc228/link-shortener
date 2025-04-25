FROM python:3.12-slim

WORKDIR /app

COPY ./app ./app
COPY ./requirements.txt ./requirements.txt

RUN pip install --no-cache-dir --upgrade pip
RUN pip install --no-cache-dir -r requirements.txt

CMD ["sh", "-c", "PYTHONPATH=. python app/db/create_db.py && uvicorn app.main:app --host 0.0.0.0 --port 8000"]

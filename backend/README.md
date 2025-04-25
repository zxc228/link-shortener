# Task Tracker API

Backend for a personal link shortener. Built with FastAPI + SQLite.

## Technology Stack

- **Python 3.12**
- **FastAPI**
- **SQLAlchemy (async)**
- **SQLite**
- **curl-friendly REST API**

---

## Installation

```bash
git clone https://github.com/zxc228/link-shortener.git
cd link-shortener/backend
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt

```

--- 
## Running the Server (Local)

```bash
cd backend
uvicorn app.main:app --reload
```

Or with Docker:

```bash
cd backend
docker build -t link-shortener-backend .
docker run -d -p 8000:8000 link-shortener-backend
```

### Documentation will be available at:
Swagger: http://127.0.0.1:8000/docs

## Project Structure
```
backend/
├── app/
│   ├── db/
│   ├── models/
│   ├── routers/
│   ├── schemas/
│   ├── services/
│   └── main.py
├── shortener.db
├── requirements.txt
├── Dockerfile
└── README.md
```


## API Endpoints
### Links:

- POST /links/ — create a short link
- GET /r/{short_key} — redirect to original URL
- GET /links/{short_key} — get link info (original_url, clicks)


## Example

**Create a short link:**
```bash
curl -X POST "http://localhost:8000/links/" -H "Content-Type: application/json" -d '{"original_url": "https://example.com"}'
```

**Redirect:**
```bash
http://localhost:8000/r/{short_key}
```

**Get link info:**
```bash
curl "http://localhost:8000/links/{short_key}"
```


## Author
Ilya Istomin — [telegram](https://t.me/diabobus) | portfolio (in progress)
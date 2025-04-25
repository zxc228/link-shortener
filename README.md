# Link Shortener

A simple, elegant, and fast URL shortener built as a pet project by [Ilya Istomin](https://github.com/zxc228).  
This project is designed as a full-stack portfolio piece with **FastAPI** on the backend and **Next.js** on the frontend.

---

## Project Structure
```bash
link-shortener/
├── backend/   → FastAPI app (API, SQLite, link generation)
├── frontend/  → Next.js app (UI, Tailwind, Animations)
├── README.md  → you’re here
├── docker-compose.yml → for full project deployment

```

Each part of the project is fully independent and documented separately.

---

## 📡 Backend

> ✅ Status: **Done**

The backend includes:
- 🔗 URL shortening logic
- 🧠 Async SQLAlchemy with SQLite
- 📈 Click statistics
- ⚡ Fast and minimal REST API

📘 **[Backend README](./backend/README.md)** — setup, endpoints and more.

---

## 🧾 Frontend

> ✅ Status: **Done**

The frontend is built with:
- ⚛️ Next.js 14 (App Router)
- 💅 Tailwind CSS with custom design
- 🎬 Framer Motion animations
- 🔥 React Hot Toast notifications

📘 **[Frontend README](./frontend/README.md)** — setup, features and more.

---
## 🐳 Running with Docker

You can run both the **backend** and **frontend** using Docker and Docker Compose.
### 📦 Requirements
- [Docker](https://www.docker.com/)
- [Docker compose](https://docs.docker.com/compose/)

### 🚀 Quick Start
```bash
git clone https://github.com/zxc228/link-shortener.git
cd link-shortener
docker compose up --build

```

- Backend: http://localhost:8000
- Frontend: http://localhost:3000

### 🛑 Stopping the Containers
```bash
docker-compose down
```
---
## 👨‍💻 Author

**Ilya Istomin** — full-stack developer focused on Python and modern JavaScript.  
Currently building pet projects, real-world tools, and portfolio apps.

- GitHub: [@zxc228](https://github.com/zxc228)
- Telegram: [@diabobus](https://t.me/diabobus)
- Portfolio site: _coming soon..._

---

## 📦 License

MIT — use it, modify it, ship it 🚢
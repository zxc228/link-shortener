# Task Tracker Frontend

The official frontend for the **[Task Tracker API](../backend/README.md)**, built with Next.js 14, Tailwind CSS, and modern design principles.

`Fully client-rendered, minimal UI, smooth auth flow with JWT.`

---

## Tech Stack
- Next.js 14 (App Router, TypeScript)
- Tailwind CSS (with custom design system)
- JWT Authentication
- React Hooks + Context
- React Hot Toast for notifications
- REST API connection to FastAPI backend

---
## Installation
```bash
git clone https://github.com/yourname/link-shortener.git
cd link-shortener/frontend
npm install
```


You can also use `pnpm` or `yarn` if preferred.

---

## Development

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## Project Structure

```bash
frontend/
├── public/              # Static assets (icons, logos)
├── src/
│   ├── app/             # App Router, main layout and pages
│   ├── components/      # Shared UI components (LinkForm, Modal, Spinner, etc.)
│   ├── hooks/           # Custom React hooks (useCreateLink, useFetchLinkInfo)
│   ├── lib/             # API client and configs
│   └── styles/          # Tailwind setup and globals
├── tailwind.config.ts
├── tsconfig.json
└── README.md

```
---
## Features
- Create short links instantly
- Copy short link to clipboard
- View detailed statistics (clicks, created at)
- Smooth animations on form, modals, loading
- Beautiful toast notifications for actions
- Minimalistic, modern responsive layout
- Type-safe API integration with backend


## Backend API

The frontend connects to the **[FastAPI](../backend/README.md)** using token-based auth.

You’ll need to have the backend running on http://localhost:8000 (or update the API URL in lib/config.ts)

## Author

Ilya Istomin
Full-stack developer focused on building fast, modern, minimal web tools.
- GitHub: @zxc228
- Telegram: @diabobus
- Portfolio: coming soon…

---

## License

MIT — use it, modify it, deploy it.
Just give credit if you do 
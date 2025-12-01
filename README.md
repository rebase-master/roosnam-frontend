# Roosnam Frontend (Next.js)

Public portfolio site consuming the Rails API with ISR and SWR.

## Setup

### Requirements
- Node.js 20
- npm

### Installation
```
npm install
```

### Env
Create `.env.local` with:
```bash
NEXT_PUBLIC_API_URL=http://localhost:3000/api/v1
NEXT_PUBLIC_SITE_URL=http://localhost:3001
# Set to `false` to load real data from the Rails API.
# Any other value (or being unset) will use mock data.
NEXT_PUBLIC_SHOW_MOCK_DATA=false
```

**Environment Variables:**
- `NEXT_PUBLIC_API_URL` - Backend API base URL
- `NEXT_PUBLIC_SITE_URL` - Frontend site URL
- `NEXT_PUBLIC_SHOW_MOCK_DATA`  
  - `false` → use real API data  
  - anything else / unset → use mock data only

### Development
```
npm run dev
```

### Build
```
npm run build && npm start
```

## Pages
- `/` — Lists works from `/api/v1/works` (ISR 60s)

## Docker / docker-compose

When running via `docker compose` the container writes its env vars into
`/app/.env.local` before starting Next.js. To ensure the frontend uses
**real API data**, you must set the env vars in the shell that starts
compose, e.g.:

```bash
export NEXT_PUBLIC_API_URL=http://localhost:3000/api/v1
export NEXT_PUBLIC_SHOW_MOCK_DATA=false

cd roosnam-frontend
docker compose up --build web
```

If you previously ran with mock data enabled, stop the container and
restart `docker compose` after changing the env vars so that `.env.local`
is rewritten.

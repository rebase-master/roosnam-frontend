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
```
NEXT_PUBLIC_API_URL=http://localhost:3000/api/v1
NEXT_PUBLIC_SITE_URL=http://localhost:3001
NEXT_PUBLIC_SHOW_MOCK_DATA=true
```

**Environment Variables:**
- `NEXT_PUBLIC_API_URL` - Backend API base URL
- `NEXT_PUBLIC_SITE_URL` - Frontend site URL
- `NEXT_PUBLIC_SHOW_MOCK_DATA` - Set to `true` (default) to use mock data, `false` to fetch from API

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

## Docker
```
docker build -t roosnam-frontend .
docker run -p 3001:3000 roosnam-frontend
```

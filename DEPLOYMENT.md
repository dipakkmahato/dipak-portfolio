# Vercel deployment

This repository contains two deployable apps. Create two Vercel projects from the same Git repository:

1. **Frontend**: set the Root Directory to `frontend`. Vercel detects TanStack Start; `frontend/vercel.json` declares the framework and its Vite config enables Nitro's Vercel deployment output.
2. **Backend API**: set the Root Directory to `backend`. `backend/vercel.json` selects Express, and Vercel deploys the app exported by `src/app.ts` as a function.

Set these environment variables in the **backend** Vercel project:

- `MONGODB_URI`: MongoDB connection string
- `MONGODB_DB`: database name (defaults to `portfolio`)
- `ADMIN_USERNAME`, `ADMIN_PASSWORD`, `JWT_SECRET`: admin login configuration
- `FRONTEND_ORIGIN`: exact frontend origin, such as `https://your-portfolio.vercel.app` (comma-separated origins are supported)
- `TRUST_PROXY_HOPS`: trusted proxy hop count; Vercel normally uses `1`

Set `VITE_API_BASE_URL` in the **frontend** Vercel project to the backend deployment origin, such as `https://your-api.vercel.app`, then redeploy. This is a public API URL, not a secret, and is required for the frontend to reach the backend in production.

The frontend calls the backend for site content, contact submissions, admin features, and CV metadata/downloads. The CV endpoints are served by the Express backend at `/api/cv` and `/api/cv/download`; there is no separate Netlify function. The backend uses MongoDB transactions for admin site updates, so MongoDB must run as a replica set (MongoDB Atlas does).

For local development, run `npm run dev:backend` and `npm run dev:frontend` from the repository root. The frontend uses `http://localhost:5000` when `VITE_API_BASE_URL` is not set in development.

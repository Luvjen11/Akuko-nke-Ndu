# Frontend Deployment Guide

## Current Issue
Your frontend is trying to connect to `localhost:8080` but the backend is deployed on Railway. This causes connection errors.

## Solutions

### Option 1: Deploy Frontend to Vercel (Recommended)

1. **Connect to Vercel**:
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "New Project" → "Import Git Repository"
   - Select your repository and set the root directory to `frontend`

2. **Configure Environment Variables**:
   - In your Vercel project settings, add:
   ```
   VITE_API_URL=https://your-railway-app.railway.app/Akuko-nke-Ndu/quotes
   ```
   - Replace `your-railway-app` with your actual Railway app name

3. **Deploy**:
   - Vercel will automatically build and deploy your React app
   - Your frontend will now connect to your Railway backend

### Option 2: Deploy Frontend to Railway

1. **Create a new Railway service** for the frontend
2. **Set the root directory** to `frontend`
3. **Add environment variable**:
   ```
   VITE_API_URL=https://your-backend-app.railway.app/Akuko-nke-Ndu/quotes
   ```

### Option 3: Local Development

For local development, create a `.env` file in the `frontend` directory:

```bash
# frontend/.env
VITE_API_URL=http://localhost:8080/Akuko-nke-Ndu/quotes
```

## API Endpoints

Your backend provides these endpoints:
- `GET /Akuko-nke-Ndu/quotes` - Get all quotes
- `GET /Akuko-nke-Ndu/quotes/random` - Get random quote
- `POST /Akuko-nke-Ndu/quotes` - Create new quote
- `DELETE /Akuko-nke-Ndu/quotes/{id}` - Delete quote
- `PUT /Akuko-nke-Ndu/quotes/{id}/favorite` - Toggle favorite
- `GET /Akuko-nke-Ndu/quotes/favorites` - Get favorite quotes

## Troubleshooting

### Connection Refused Error
- **Cause**: Frontend trying to connect to localhost instead of Railway
- **Solution**: Set `VITE_API_URL` environment variable to your Railway URL

### CORS Errors
- **Cause**: Railway backend blocking frontend requests
- **Solution**: Your backend already has CORS configured for localhost:3000 and localhost:5173

### Environment Variable Not Working
- **Cause**: Vite requires environment variables to start with `VITE_`
- **Solution**: Make sure your variable is named `VITE_API_URL`

## Testing

1. **Test locally**:
   ```bash
   cd frontend
   npm run dev
   ```

2. **Test deployed version**:
   - Visit your Vercel/Railway frontend URL
   - Check browser console for API calls
   - Verify quotes are loading from Railway backend 
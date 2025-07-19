# 🚀 Deployment Guide for Akuko nke Ndu

This guide will help you deploy your app for free and make it available on all devices as a PWA!

## 📱 PWA Features Added
- ✅ Offline support
- ✅ Installable on mobile devices
- ✅ App-like experience
- ✅ Caching for better performance

## 🎯 Quick Deployment (15 minutes)

### Step 1: Deploy Backend to Railway

1. **Go to Railway.app**
   - Visit [railway.app](https://railway.app)
   - Sign up with your GitHub account

2. **Create New Project**
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Connect your repository

3. **Add Database**
   - In your project, click "New"
   - Select "Database" → "PostgreSQL"
   - Railway will automatically provide connection details

4. **Set Environment Variables**
   - Go to your backend service
   - Click "Variables" tab
   - Add these variables:
   ```
   DATABASE_URL=(Railway will provide this)
   DATABASE_USERNAME=(Railway will provide this)
   DATABASE_PASSWORD=(Railway will provide this)
   DATABASE_DRIVER=org.postgresql.Driver
   HIBERNATE_DIALECT=org.hibernate.dialect.PostgreSQLDialect
   PORT=8080
   CONTEXT_PATH=/api
   ```

5. **Deploy**
   - Railway will automatically build and deploy
   - Wait for deployment to complete
   - Copy your backend URL (e.g., `https://your-app.railway.app`)

### Step 2: Deploy Frontend to Vercel

1. **Go to Vercel.com**
   - Visit [vercel.com](https://vercel.com)
   - Sign up with your GitHub account

2. **Import Project**
   - Click "New Project"
   - Import your GitHub repository
   - Set root directory to `frontend`

3. **Configure Build**
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`

4. **Set Environment Variable**
   - Add environment variable:
   ```
   VITE_API_URL=https://your-backend-url.railway.app/api/quotes
   ```
   (Replace with your actual Railway backend URL)

5. **Deploy**
   - Click "Deploy"
   - Wait for deployment to complete
   - Your app is now live! 🎉

## 📱 Using Your PWA on Mobile

### Android:
1. Open your app in Chrome
2. Tap the menu (⋮)
3. Select "Add to Home screen"
4. Your app will now appear as an icon!

### iPhone:
1. Open your app in Safari
2. Tap the share button (□↑)
3. Select "Add to Home Screen"
4. Your app will now appear as an icon!

## 🔧 Local Development

### Backend:
```bash
cd akukoNkeNdu
./mvnw spring-boot:run
```

### Frontend:
```bash
cd frontend
npm install
npm run dev
```

## 🌐 Environment Variables

### Backend (Railway):
- `DATABASE_URL`: PostgreSQL connection string
- `DATABASE_USERNAME`: Database username
- `DATABASE_PASSWORD`: Database password
- `DATABASE_DRIVER`: `org.postgresql.Driver`
- `HIBERNATE_DIALECT`: `org.hibernate.dialect.PostgreSQLDialect`
- `PORT`: `8080`
- `CONTEXT_PATH`: `/api`

### Frontend (Vercel):
- `VITE_API_URL`: Your Railway backend URL

## 🎨 Customizing PWA Icons

Replace the placeholder icon files:
- `frontend/public/icon-192x192.png`
- `frontend/public/icon-512x512.png`

You can create icons using:
- [Favicon.io](https://favicon.io/)
- [PWA Builder](https://www.pwabuilder.com/imageGenerator)
- Any image editor

## 🔍 Testing PWA Features

1. **Installation**: Try adding to home screen
2. **Offline**: Turn off internet and refresh
3. **Performance**: Check loading speed
4. **Updates**: Deploy new version and check for updates

## 🚨 Troubleshooting

### Backend Issues:
- Check Railway logs for errors
- Verify environment variables
- Ensure database is connected

### Frontend Issues:
- Check Vercel build logs
- Verify API URL is correct
- Test locally first

### PWA Issues:
- Check browser console for service worker errors
- Verify manifest.json is accessible
- Test on HTTPS (required for PWA)

## 💰 Cost

**FREE!** 🎉
- Railway: 500 hours/month free
- Vercel: Unlimited static sites, 100GB bandwidth/month
- Both have generous free tiers

## 🎯 Next Steps

1. Deploy following the guide above
2. Test on your phone
3. Share with friends and family
4. Add custom icons
5. Consider adding more PWA features

## 📞 Need Help?

- Check Railway/Vercel documentation
- Review deployment logs
- Test locally to isolate issues
- Check environment variables

Your app will be live and accessible from any device! 📱✨ 
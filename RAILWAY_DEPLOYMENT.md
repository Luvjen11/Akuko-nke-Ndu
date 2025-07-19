# Railway Deployment Guide

## Overview
This project contains both a Spring Boot backend (in `akukoNkeNdu/`) and a React frontend (in `frontend/`). This guide focuses on deploying the Spring Boot backend to Railway.

## Files Added/Modified for Railway Deployment

1. **`railway.json`** (root directory) - Railway configuration
2. **`nixpacks.toml`** (root directory) - Nixpacks build configuration
3. **Removed** `akukoNkeNdu/railway.json` - Old configuration

## Railway Setup Steps

### 1. Connect Your Repository
- Go to [Railway Dashboard](https://railway.app/dashboard)
- Click "New Project" → "Deploy from GitHub repo"
- Select your repository: `Akuko-nke-Ndu`

### 2. Configure Environment Variables
In your Railway project dashboard, add these environment variables:

```
DATABASE_URL=jdbc:postgresql://your-railway-postgres-url:5432/your-database-name
DATABASE_USERNAME=your-username
DATABASE_PASSWORD=your-password
DATABASE_DRIVER=org.postgresql.Driver
HIBERNATE_DIALECT=org.hibernate.dialect.PostgreSQLDialect
PORT=8080
```

### 3. Add PostgreSQL Database
- In your Railway project, go to "New" → "Database" → "PostgreSQL"
- Railway will automatically provide the connection details
- Copy the `DATABASE_URL` from the PostgreSQL service and update your environment variables

### 4. Deploy
- Railway will automatically detect the changes and start building
- The build process will:
  1. Install Maven and OpenJDK 21
  2. Navigate to `akukoNkeNdu/` directory
  3. Run `mvn clean package -DskipTests`
  4. Start the application with `java -jar target/akukoNkeNdu-0.0.1-SNAPSHOT.jar`

## Health Check
The application includes a health check endpoint at `/api/quotes` that Railway will use to verify the deployment.

## Troubleshooting

### If Build Fails
1. Check the build logs in Railway dashboard
2. Ensure all environment variables are set correctly
3. Verify the PostgreSQL database is properly connected

### If Application Fails to Start
1. Check the deployment logs
2. Verify the `DATABASE_URL` format is correct
3. Ensure the database is accessible from Railway

### Common Issues
- **Port binding**: The app uses `PORT` environment variable (Railway sets this automatically)
- **Database connection**: Make sure PostgreSQL is added as a service in Railway
- **Memory issues**: Railway provides adequate memory for Spring Boot applications

## API Endpoints
Once deployed, your API will be available at:
- `https://your-railway-app.railway.app/api/quotes`

## Frontend Deployment
For the React frontend, consider deploying it separately to Vercel or Netlify, or create a separate Railway service for it. 
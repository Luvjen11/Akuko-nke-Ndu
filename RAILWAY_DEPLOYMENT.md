# Railway Deployment Guide

## Overview
This project contains both a Spring Boot backend (in `akukoNkeNdu/`) and a React frontend (in `frontend/`). This guide focuses on deploying the Spring Boot backend to Railway.

## Files Added/Modified for Railway Deployment

1. **`railway.json`** (root directory) - Railway configuration
2. **`Procfile`** (root directory) - Standard Railway process file
3. **Removed** `akukoNkeNdu/railway.json` - Old configuration

## Railway Setup Steps

### 1. Connect Your Repository
- Go to [Railway Dashboard](https://railway.app/dashboard)
- Click "New Project" → "Deploy from GitHub repo"
- Select your repository: `Akuko-nke-Ndu`

### 2. Add MySQL Database
- In your Railway project, go to "New" → "Database" → "MySQL"
- Railway will automatically provide the connection details
- Copy the connection details for the next step

### 3. Configure Environment Variables
In your Railway project dashboard, add these environment variables:

```
DATABASE_URL=jdbc:mysql://your-railway-mysql-url:3306/your-database-name
DATABASE_USERNAME=your-username
DATABASE_PASSWORD=your-password
DATABASE_DRIVER=com.mysql.cj.jdbc.Driver
HIBERNATE_DIALECT=org.hibernate.dialect.MySQLDialect
PORT=8080
```

**Important**: Replace the values with the actual MySQL connection details from Railway.

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
3. Verify the MySQL database is properly connected

### If Application Fails to Start
1. Check the deployment logs
2. Verify the `DATABASE_URL` format is correct for MySQL:
   - Format: `jdbc:mysql://host:3306/database_name`
   - Make sure to include the database name in the URL
3. Ensure the database is accessible from Railway

### Common Issues
- **Port binding**: The app uses `PORT` environment variable (Railway sets this automatically)
- **Database connection**: Make sure MySQL is added as a service in Railway
- **Memory issues**: Railway provides adequate memory for Spring Boot applications
- **MySQL URL format**: Ensure the DATABASE_URL includes the database name

## API Endpoints
Once deployed, your API will be available at:
- `https://your-railway-app.railway.app/api/quotes`

## Frontend Deployment
For the React frontend, consider deploying it separately to Vercel or Netlify, or create a separate Railway service for it. 
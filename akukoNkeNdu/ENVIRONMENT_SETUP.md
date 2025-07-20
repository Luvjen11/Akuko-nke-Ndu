# Environment Setup Guide

## Security Notice
⚠️ **IMPORTANT**: Never commit sensitive credentials to version control. All database credentials and other sensitive information should be stored as environment variables.

## Step-by-Step Setup

### Step 1: Create Environment Template File
Create this file: `akukoNkeNdu/env-template.txt`

```bash
# In your terminal, navigate to the akukoNkeNdu folder
cd akukoNkeNdu

# Create the template file
touch env-template.txt
```

Add this content to `env-template.txt`:
```
# Database Configuration
DATABASE_URL=jdbc:mysql://your-database-host:port/database-name
DATABASE_USERNAME=your-database-username
DATABASE_PASSWORD=your-database-password
DATABASE_DRIVER=com.mysql.cj.jdbc.Driver

# JPA/Hibernate Configuration
JPA_DDL_AUTO=update
JPA_SHOW_SQL=false
JPA_FORMAT_SQL=false
HIBERNATE_DIALECT=org.hibernate.dialect.MySQLDialect

# Server Configuration
PORT=8080
CONTEXT_PATH=

# CORS Configuration
CORS_ALLOWED_ORIGINS=http://localhost:3000,http://localhost:5173
CORS_ALLOWED_METHODS=GET,POST,PUT,DELETE,OPTIONS
CORS_ALLOWED_HEADERS=*
```

### Step 2: Create Your Local Environment File
Create this file: `akukoNkeNdu/.env` (this file is already in .gitignore)

```bash
# In the akukoNkeNdu folder, create .env file
touch .env
```

Add your actual database credentials to `.env`:
```
# Database Configuration - REPLACE WITH YOUR ACTUAL VALUES
DATABASE_URL=jdbc:mysql://centerbeam.proxy.rlwy.net:30139/railway
DATABASE_USERNAME=root
DATABASE_PASSWORD=your-actual-password-here
DATABASE_DRIVER=com.mysql.cj.jdbc.Driver

# JPA/Hibernate Configuration
JPA_DDL_AUTO=update
JPA_SHOW_SQL=true
JPA_FORMAT_SQL=true
HIBERNATE_DIALECT=org.hibernate.dialect.MySQLDialect

# Server Configuration
PORT=8080
CONTEXT_PATH=

# CORS Configuration
CORS_ALLOWED_ORIGINS=http://localhost:3000,http://localhost:5173
CORS_ALLOWED_METHODS=GET,POST,PUT,DELETE,OPTIONS
CORS_ALLOWED_HEADERS=*
```

### Step 3: Spring Boot Configuration (Already Done!)
✅ The `application.properties` file has been updated to automatically load the `.env` file
✅ No additional dependencies needed - using Spring Boot's built-in support

### Step 4: Set Up Production Environment Variables

#### For Railway Deployment:
1. Go to your Railway project dashboard
2. Click on your service
3. Go to "Variables" tab
4. Add these variables one by one:

| Variable Name | Value |
|---------------|-------|
| `DATABASE_URL` | `jdbc:mysql://centerbeam.proxy.rlwy.net:30139/railway` |
| `DATABASE_USERNAME` | `root` |
| `DATABASE_PASSWORD` | `your-actual-password` |
| `DATABASE_DRIVER` | `com.mysql.cj.jdbc.Driver` |
| `JPA_DDL_AUTO` | `update` |
| `JPA_SHOW_SQL` | `false` |
| `JPA_FORMAT_SQL` | `false` |
| `HIBERNATE_DIALECT` | `org.hibernate.dialect.MySQLDialect` |
| `PORT` | `8080` |
| `CONTEXT_PATH` | (leave empty) |
| `CORS_ALLOWED_ORIGINS` | `http://localhost:3000,http://localhost:5173` |
| `CORS_ALLOWED_METHODS` | `GET,POST,PUT,DELETE,OPTIONS` |
| `CORS_ALLOWED_HEADERS` | `*` |

#### For Heroku Deployment:
```bash
heroku config:set DATABASE_URL=jdbc:mysql://centerbeam.proxy.rlwy.net:30139/railway
heroku config:set DATABASE_USERNAME=root
heroku config:set DATABASE_PASSWORD=your-actual-password
# ... repeat for all variables
```

## File Structure After Setup
```
akukoNkeNdu/
├── .env                    ← Your local environment file (DO NOT COMMIT)
├── env-template.txt        ← Template for reference
├── src/
│   └── main/
│       ├── java/
│       │   └── com/
│       │       └── example/
│       │           └── akukoNkeNdu/
│       │               └── AkukoNkeNduApplication.java  ← Clean and simple
│       └── resources/
│           ├── application.properties  ← Updated with .env loading
│           └── local.properties       ← Updated
└── pom.xml                ← Clean, no extra dependencies needed
```

## Testing Your Setup

1. **Local Development:**
   ```bash
   cd akukoNkeNdu
   mvn spring-boot:run
   ```

2. **Check if environment variables are loaded:**
   - Your app should start without database connection errors
   - Check the console logs for any missing environment variable warnings

## Security Checklist
- ✅ `.env` file is in `.gitignore` (already done)
- ✅ No hardcoded credentials in any files
- ✅ Environment variables set in production platform
- ✅ Different passwords for development and production
- ✅ Strong, unique passwords used

## Troubleshooting

**If you get "Environment variable not found" errors:**
1. Check that your `.env` file exists in the `akukoNkeNdu/` folder
2. Verify the variable names match exactly (case-sensitive)
3. Restart your application after making changes

**If database connection fails:**
1. Verify your database credentials in `.env`
2. Check that your database server is running
3. Ensure the database URL format is correct

**If the app doesn't load .env file:**
1. Make sure the `.env` file is in the root of the `akukoNkeNdu/` folder
2. Check that `spring.config.import=optional:file:.env` is in `application.properties`
3. Restart the application 
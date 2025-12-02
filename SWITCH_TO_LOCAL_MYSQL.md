# Switching from Railway MySQL to Local MySQL

## Step-by-Step Guide

### Step 1: Ensure Local MySQL is Running
1. **Check if MySQL is installed:**
   ```bash
   mysql --version
   ```

2. **Start MySQL service:**
   - **Windows:** Open Services (services.msc) and start "MySQL" service, OR
   ```bash
   # If MySQL is installed as a service
   net start MySQL
   ```
   - **Mac/Linux:**
   ```bash
   sudo service mysql start
   # OR
   sudo systemctl start mysql
   ```

### Step 2: Create/Verify Your Local Database
1. **Connect to MySQL:**
   ```bash
   mysql -u root -p
   ```
   (Enter your local MySQL root password when prompted)

2. **Create database (if it doesn't exist):**
   ```sql
   CREATE DATABASE IF NOT EXISTS akuko_ndu;
   ```
   (Replace `akuko_ndu` with your preferred database name)

3. **Verify database exists:**
   ```sql
   SHOW DATABASES;
   ```

4. **Exit MySQL:**
   ```sql
   EXIT;
   ```

### Step 3: Update Your `.env` File
The `.env` file in `akukoNkeNdu/` directory needs to be updated with your local MySQL credentials.

**Current Railway configuration:**
```
DATABASE_URL=jdbc:mysql://centerbeam.proxy.rlwy.net:30139/railway
```

**Update to local MySQL:**
```
DATABASE_URL=jdbc:mysql://localhost:3306/akuko_ndu
DATABASE_USERNAME=root
DATABASE_PASSWORD=your-local-mysql-password
```

**Full `.env` file template for local MySQL:**
```
# Database Configuration - Local MySQL
DATABASE_URL=jdbc:mysql://localhost:3306/akuko_ndu
DATABASE_USERNAME=root
DATABASE_PASSWORD=your-local-mysql-password-here
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

**Important:** Replace these values with your actual local MySQL credentials:
- `akuko_ndu` → Your local database name
- `root` → Your local MySQL username (if different)
- `your-local-mysql-password-here` → Your local MySQL password

### Step 4: Test the Connection
1. **Navigate to your project directory:**
   ```bash
   cd akukoNkeNdu
   ```

2. **Start your Spring Boot application:**
   ```bash
   mvn spring-boot:run
   ```

3. **Check the logs** for:
   - ✅ "Started AkukoNkeNduApplication" - Success!
   - ❌ Any database connection errors - Check your credentials

### Step 5: Verify Data Migration (Optional)
If you had data in Railway MySQL that you want to keep:

1. **Export data from Railway MySQL** (if needed):
   - Use MySQL Workbench or command line to connect to Railway MySQL
   - Export your data

2. **Import to local MySQL:**
   ```bash
   mysql -u root -p akuko_ndu < your-backup-file.sql
   ```

## Troubleshooting

### Connection Refused Error
- **Problem:** `java.net.ConnectException: Connection refused`
- **Solution:** 
  - Verify MySQL service is running
  - Check MySQL is listening on port 3306: `netstat -an | grep 3306`
  - Verify firewall isn't blocking the connection

### Access Denied Error
- **Problem:** `Access denied for user 'root'@'localhost'`
- **Solution:**
  - Verify username and password in `.env` file
  - Try connecting manually: `mysql -u root -p`
  - Reset MySQL password if needed

### Database Doesn't Exist Error
- **Problem:** `Unknown database 'akuko_ndu'`
- **Solution:**
  - Create the database (see Step 2)
  - Or update `DATABASE_URL` in `.env` to use an existing database name

### Port Already in Use
- **Problem:** Port 8080 is already in use
- **Solution:**
  - Change `PORT=8080` to a different port in `.env` (e.g., `PORT=8081`)
  - Or stop the application using port 8080

## Notes

- ✅ Your Railway deployment will continue to work independently - this only affects local development
- ✅ The `.env` file is already in `.gitignore`, so your local credentials won't be committed
- ✅ Railway environment variables are separate from your local `.env` file
- ✅ You can switch between local and Railway by updating the `.env` file


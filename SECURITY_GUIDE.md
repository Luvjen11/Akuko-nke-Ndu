# 🔒 Security Guide - Protecting Sensitive Information

This guide explains how to handle passwords, API keys, and other sensitive data safely.

## ✅ **Current Security Setup**

Your application is already configured securely:

### **Backend Security:**
```properties
# ✅ SECURE - Uses environment variables
spring.datasource.password=${DATABASE_PASSWORD:}
spring.datasource.username=${DATABASE_USERNAME:root}
spring.datasource.url=${DATABASE_URL:jdbc:mysql://localhost:3306/akuko_ndu}
```

### **Frontend Security:**
```javascript
// ✅ SECURE - Uses environment variables
const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8080/api/quotes";
```

## 🚫 **What NOT to Do**

### ❌ Never do this:
```properties
# ❌ DANGEROUS - Hardcoded password
spring.datasource.password=mypassword123
spring.datasource.username=admin
```

```javascript
// ❌ DANGEROUS - Hardcoded API key
const API_KEY = "sk-1234567890abcdef";
```

## ✅ **What You SHOULD Do**

### **1. Local Development**

Create a `local.properties` file (never commit this):

```properties
# local.properties (NOT committed to GitHub)
spring.datasource.url=jdbc:mysql://localhost:3306/akuko_ndu
spring.datasource.username=your_actual_username
spring.datasource.password=your_actual_password
```

### **2. Production Deployment**

Set environment variables in your deployment platform:

**Railway (Backend):**
```
DATABASE_URL=postgresql://user:pass@host:port/db
DATABASE_USERNAME=your_username
DATABASE_PASSWORD=your_password
```

**Vercel (Frontend):**
```
VITE_API_URL=https://your-backend-url.railway.app/api/quotes
```

## 🔐 **Environment Variables Explained**

### **How it works:**
```properties
# Format: ${VARIABLE_NAME:default_value}
spring.datasource.password=${DATABASE_PASSWORD:}
```

- If `DATABASE_PASSWORD` environment variable is set → uses that value
- If not set → uses empty string as default
- This allows different values for different environments

### **Priority Order:**
1. Environment variables (highest priority)
2. `local.properties` file (local development)
3. Default values in `application.properties` (lowest priority)

## 📁 **File Structure for Security**

```
akukoNkeNdu/
├── src/main/resources/
│   ├── application.properties     # ✅ Committed (no secrets)
│   └── local.properties          # ❌ NOT committed (contains secrets)
├── local.properties.example      # ✅ Committed (template)
└── .gitignore                    # ✅ Committed (excludes sensitive files)
```

## 🛡️ **Security Best Practices**

### **1. Never Commit Secrets**
- ✅ Use environment variables
- ✅ Use `.env` files (not committed)
- ❌ Never hardcode passwords
- ❌ Never commit API keys

### **2. Use Different Credentials**
- **Development**: Local database
- **Production**: Cloud database
- **Testing**: Separate test database

### **3. Rotate Credentials Regularly**
- Change database passwords periodically
- Update API keys when compromised
- Use strong, unique passwords

### **4. Monitor for Secrets**
- Use tools like `git-secrets`
- Check for accidental commits
- Review code before pushing

## 🔍 **Checking for Security Issues**

### **Scan for Hardcoded Secrets:**
```bash
# Search for potential passwords in code
grep -r "password" src/
grep -r "secret" src/
grep -r "key" src/
```

### **Check Git History:**
```bash
# Check if secrets were ever committed
git log --all --full-history -- "**/application.properties"
```

## 🚨 **If You Accidentally Commit Secrets**

### **Immediate Actions:**
1. **Revoke the secret** (change password/API key)
2. **Remove from Git history:**
   ```bash
   git filter-branch --force --index-filter \
   'git rm --cached --ignore-unmatch path/to/file' \
   --prune-empty --tag-name-filter cat -- --all
   ```
3. **Force push:**
   ```bash
   git push origin --force
   ```

## 📋 **Security Checklist**

### **Before Committing:**
- [ ] No passwords in code
- [ ] No API keys in code
- [ ] No database URLs with credentials
- [ ] `.env` files in `.gitignore`
- [ ] `local.properties` in `.gitignore`

### **Before Deploying:**
- [ ] Environment variables set in deployment platform
- [ ] Database credentials are secure
- [ ] HTTPS enabled (for production)
- [ ] CORS properly configured

## 🔧 **Local Development Setup**

### **1. Copy example files:**
```bash
# Backend
cp akukoNkeNdu/local.properties.example akukoNkeNdu/local.properties

# Frontend
cp frontend/env.example frontend/.env.local
```

### **2. Fill in your actual values:**
```properties
# local.properties
spring.datasource.username=your_actual_username
spring.datasource.password=your_actual_password
```

### **3. Test locally:**
```bash
# Backend
cd akukoNkeNdu
./mvnw spring-boot:run

# Frontend
cd frontend
npm run dev
```

## 💡 **Pro Tips**

1. **Use strong passwords** (12+ characters, mix of types)
2. **Use different passwords** for each environment
3. **Consider using a password manager** for development
4. **Regular security audits** of your codebase
5. **Keep dependencies updated** to avoid vulnerabilities

## 🆘 **Need Help?**

If you accidentally commit secrets:
1. Don't panic
2. Immediately revoke the credentials
3. Remove from Git history
4. Update all environments
5. Consider using a secret scanning tool

Your current setup is already secure! Just make sure to follow these practices going forward. 🔒✅ 
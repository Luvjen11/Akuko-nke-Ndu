# Deploy Akuko nke Ndu with Aiven and Render

This guide deploys the application using:

- **Aiven Free MySQL** for the database
- **Render Free Web Service** for the Spring Boot API
- **Render Free Static Site** for the React/Vite frontend

The repository already includes [`render.yaml`](render.yaml), which defines both Render services.

## 1. Check the project before deploying

Push the latest project to GitHub. The repository root should contain:

```text
render.yaml
frontend/
akukoNkeNdu/
```

Do not commit database passwords or `local.properties`.

## 2. Create the Aiven MySQL database

1. Open [Aiven Free MySQL](https://aiven.io/free-mysql-database).
2. Click **Get building** and create an account.
3. In the Aiven Console, click **Create service**.
4. Choose **MySQL**.
5. Select the **Free** plan.
6. Choose a region close to your Render services.
7. Enter a service name, such as `akuko-mysql`.
8. Create the service and wait until its status is **Running**.

Aiven's free plan is intended for prototypes and small applications. It has limited storage and resources, and the service may power off after a period of inactivity.

## 3. Copy the Aiven connection details

Open the Aiven MySQL service and find **Connection information**. Copy these values:

- Host
- Port
- Database name
- Username
- Password

Aiven commonly uses `avnadmin` as the username and `defaultdb` as the database name. Use the actual values shown in your service.

Create the JDBC URL in this format:

```text
jdbc:mysql://HOST:PORT/DATABASE?sslMode=REQUIRED
```

Example:

```text
jdbc:mysql://mysql-xxxxx.aivencloud.com:12345/defaultdb?sslMode=REQUIRED
```

Use the JDBC URL above for Render. Do not paste an Aiven URL beginning only with `mysql://`.

## 4. Create the Render Blueprint

1. Open [Render](https://render.com) and sign in with GitHub.
2. Click **New**.
3. Select **Blueprint**.
4. Connect the GitHub repository containing this project.
5. Select the repository.
6. Render should detect `render.yaml`.
7. Click **Apply**.

Render will create these services:

```text
akuko-api
akuko-frontend
```

## 5. Configure the backend environment variables

Open the `akuko-api` service in Render and add these environment variables:

```text
DATABASE_URL=jdbc:mysql://YOUR_AIVEN_HOST:YOUR_AIVEN_PORT/YOUR_DATABASE?sslMode=REQUIRED
DATABASE_USERNAME=YOUR_AIVEN_USERNAME
DATABASE_PASSWORD=YOUR_AIVEN_PASSWORD
```

Optional variables, using the defaults already configured by the application:

```text
DATABASE_DRIVER=com.mysql.cj.jdbc.Driver
HIBERNATE_DIALECT=org.hibernate.dialect.MySQLDialect
```

Do not add `PORT`. Render supplies the port automatically.

Do not add `CONTEXT_PATH`. This application uses the route `/Akuko-nke-Ndu/quotes`.

Save the variables and wait for the backend deployment to finish.

## 6. Test the backend

Render will provide a URL similar to:

```text
https://akuko-api.onrender.com
```

Open this endpoint in a browser, using your actual Render URL:

```text
https://akuko-api.onrender.com/Akuko-nke-Ndu/quotes
```

An empty database should return:

```json
[]
```

The application creates its database table automatically through Hibernate.

## 7. Configure the frontend

Open the `akuko-frontend` service in Render and add this environment variable:

```text
VITE_API_URL=https://akuko-api.onrender.com/Akuko-nke-Ndu/quotes
```

Replace `akuko-api.onrender.com` with your actual backend URL.

The frontend settings should be:

```text
Build command: npm ci && npm run build
Publish directory: dist
```

Save the variable and deploy the frontend.

## 8. Configure CORS

After the frontend deploys, Render will provide a URL similar to:

```text
https://akuko-frontend.onrender.com
```

Open the backend service and go to **Environment**. Set:

```text
CORS_ALLOWED_ORIGINS=https://akuko-frontend.onrender.com
```

Use the exact frontend URL, without a trailing slash. Save the variable and redeploy `akuko-api`.

## 9. Test the complete application

Open the frontend URL and test:

1. Loading all quotes
2. Adding a quote
3. Marking a quote as favourite
4. Getting a random quote
5. Deleting a quote
6. Refreshing the page and confirming the data remains

## Troubleshooting

### The backend fails to start

Check the Render logs and verify:

- `DATABASE_URL` starts with `jdbc:mysql://`.
- The Aiven service status is **Running**.
- The host, port, database name, username, and password are correct.
- The URL includes `?sslMode=REQUIRED`.

### The frontend displays a network error

Verify that:

- `VITE_API_URL` ends with `/Akuko-nke-Ndu/quotes`.
- The backend URL is correct.
- The backend deployment is healthy.
- `CORS_ALLOWED_ORIGINS` exactly matches the frontend URL.

### The first request is slow

Free Render web services can sleep after inactivity. The first request may take several seconds while the backend starts.

### The database is empty

This is expected for a new Aiven service. Add quotes through the deployed frontend. The application uses `spring.jpa.hibernate.ddl-auto=update` to create its table.

## Portfolio notes

For a portfolio demo, describe the deployment as:

```text
React/Vite frontend and Spring Boot REST API deployed on Render,
using a managed MySQL database on Aiven and environment-based configuration.
```

The Aiven free plan is suitable for a demonstration, but it is not intended for a high-traffic production application. Never expose the database password in GitHub, screenshots, frontend code, or portfolio documentation.
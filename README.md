# **Akụkọ nke Ndụ**

**Akụkọ** means "story," and **Ndụ** means "life", in Igbo language. Together, it translates to "The Story of Life"



*A cozy place to collect and revisit my favorite book quotes.*

## Features

- **Save Quotes** – Store memorable lines from books I love.
- **Random Quote Display** – Get inspired with a randomly selected quote.
- **Browse My Collection** – View all saved quotes in a neat, scrollable list.
- **Delete Unwanted Quotes** – Keep only the ones that resonate with you.

## Getting Started

### 1. Clone the Repository

```sh
git clone repository-url
cd into the project directory
```

### 2. Backend Setup (Spring Boot + MySQL)

1. Go to https://start.spring.io/ and create a new project. Add the following dependencies: Spring Web, Spring Data JPA, MySQL Driver, and Lombok. Download the project and unzip it.

2. Set up a MySQL database and update `application.properties`.
3. Build and run the Spring Boot backend:

```sh
mvn spring-boot:run
```

### 3. Frontend Setup (React + Vite)

1. Navigate to the frontend folder and install dependencies:

```sh
cd frontend
npm install
```

2. Start the development server:

```sh
npm run dev
```

## Tech Stack

- **Frontend**: React, Vite
- **Backend**: Java, Spring Boot, MySQL
- **API Handling**: Axios

## API Endpoints

- `GET /quotes/random` – Fetch a random quote
- `GET /quotes` – Retrieve all saved quotes
- `POST /quotes` – Add a new quote
- `DELETE /quotes/{id}` – Remove a quote by ID

## Future Enhancements

- **Search by Author/Book**
- **Favorite Quotes**
- **Dark Mode**
- **User Authentication**

## License

This project is open-source and available under the [MIT License](LICENSE).

*Have a favorite quote to add? Let’s make our collection grow!*


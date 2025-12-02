# **Akụkọ nke Ndụ**

**Akụkọ** means "story," and **Ndụ** means "life", in Igbo language. Together, it translates to "The Story of Life"
This project is my tiny library of moments that moved me — a place to save, revisit, and organize quotes from the books I love.

*A cozy place to collect and revisit my favorite book quotes.*

## 🌿 What the App Does

Akụkọ nke Ndụ is a simple full-stack quotes journal with just the features I actually use:


* **Add Quotes**
  Save your favourite lines along with author + book info.
* **Random Quote Generator**
  One click → one spark of inspiration.
* **Browse All Quotes**
  View everything in a clean, scrollable list.
* **Delete Quotes**
  Keep your collection intentional.
* **Mark Favourites**
  Highlight the ones that hit a little deeper.

---

## 🛠️ **Tech Stack**

### **Frontend**

* React
* Vite
* Axios
* CSS

### **Backend**

* Java
* Spring Boot
* Spring Data JPA
* MySQL
* Lombok

### **API Endpoints**

| Method | Endpoint                | Description              |
| ------ | ----------------------- | ------------------------ |
| GET    | `/quotes`               | Get all quotes           |
| GET    | `/quotes/random`        | Fetch a random quote     |
| POST   | `/quotes`               | Add a new quote          |
| DELETE | `/quotes/{id}`          | Delete a quote           |
| PUT    | `/quotes/{id}/favorite` | Toggle favourite status  |
| GET    | `/quotes/favorites`     | Get all favourite quotes |

---
## 🚀 **Getting Started**

### 1. **Clone the Repository**

```bash
git clone <your-repo-url>
cd Akuko-nke-Ndu
```

---

### 2. **Backend Setup (Spring Boot + MySQL)**

Create a Spring Boot project with:

* Spring Web
* Spring Data JPA
* MySQL Driver
* Lombok

Update your `application.properties` with your DB credentials.

Run the backend:

```bash
mvn spring-boot:run
```

---

### 3. **Frontend Setup (React + Vite)**

```bash
cd frontend
npm install
npm run dev
```

---

## 🧩 **The Process**

This project started as a tiny idea:
**“What if I had a personal quote vault?”**

### What I built step-by-step:

1. The backend structure using Spring Boot
2. A MySQL database to store quotes
3. CRUD functionality for managing quotes
4. A random quote generator
5. Favourite quotes logic (newest feature!)
6. A React UI that’s clean, simple, and cozy

Along the way I learned how to:

* Structure a clean Java backend with services/controllers
* Use Axios with interceptors
* Manage environment variables for API URLs
* Connect React + Spring Boot seamlessly
* Add new fields to entities (`favorite`) and update controllers/services
* Handle errors properly and debug issues with MySQL + API responses

This app is intentionally small — but it strengthened my full-stack workflow and helped me practice building efficient, everyday tools.

---

## 💡 **What I Learned**

### 🌐 API Structure & Error Handling

Better debugging with Axios interceptors and clear responses.

### 🗄️ Database Relationships

Adding new fields (like favourites) without breaking existing logic.

### 🔧 Spring Boot Best Practices

Clean controllers, readable services, and organized layers.

### ⚛️ React State Management

Updating UI immediately after toggling favourite or deleting quotes.

### 🔌 Frontend–Backend Communication

Handling URLs, environment variables, and cross-origin setups.

---

## ✨ **Future Improvements**

* Search quotes by **author, book, or keyword**
* Sorting options (date added, alphabetical, favourites)
* A soft **dark mode** for nighttime reading
* Tagging system for organizing quotes
* Export quotes as PNG/Markdown
* Optional login system for cloud sync

---

## 📷 **Screenshots (optional)**


---

### 🔗 **Want to Explore More of My Work?**

Portfolio: **[https://jen-os.vercel.app](https://jen-os.vercel.app)**



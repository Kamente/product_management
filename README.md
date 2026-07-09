# Product Management System
A full-stack Product Management System developed as part of a Full Stack Developer technical assessment.
The application provides secure product and user management through a RESTful API built with Spring Boot and a modern React frontend. Authentication is implemented using JSON Web Tokens (JWT), with role-based authorization to separate administrator and standard user privileges.


## Running using the live link; default logins
### Admin login credentials:
- username: admin
- password: Admin123

### USER(normal) user credentials:
- username: justin
- password: JustinM



---

## Live Demo

**Frontend**
- https://product-management-eight-bice.vercel.app/

**Backend API**
- https://product-management-backend-a49g.onrender.com

**GitHub Repository**
- https://github.com/Kamente/product_management

---

# Technology Stack

## Frontend

- React 19
- Vite
- Material UI (MUI)
- React Router DOM
- Axios
- Context API

## Backend

- Java 21
- Spring Boot
- Spring Security
- Spring Data JPA
- PostgreSQL
- Flyway
- JWT Authentication
- Maven

## Deployment

Frontend
- Vercel

Backend
- Render

Database
- Render PostgreSQL

---

# Features

## Authentication

- Secure JWT Login
- Role-Based Authorization
- Protected Routes
- Session Persistence
- Automatic Logout on Invalid Session

---

## Dashboard

Displays live statistics including:

- Total Products
- Total Users
- Total Categories

---

## Product Management

Administrators can:

- Create Products
- Update Products
- Delete Products
- Search Products
- View Products
- Pagination
- Sorting

Standard Users can:

- View Products only

---

## User Management

Administrators (Admin) can:

- View Users
- Create Users
- Edit Users
- Delete Users
- Promote Users
- Demote Users

Standard Users cannot access User Management.

**They (User) cannot make changes (populate or drop data) on the data tables (products, users)**

---

## Profile

Authenticated users can:

- View Username
- View Assigned Role
- View Current Session Information

---


# Database

Database Engine

- PostgreSQL

Database migrations are managed using **Flyway**.

Migration scripts are located under:

```
backend/src/main/resources/db/migration
```

---

# User Creation

To simplify administration and maintain secure password storage, users are created directly within PostgreSQL using pgAdmin 4 (or any PostgreSQL client).

Passwords are stored using BCrypt hashing, ensuring compatibility with Spring Security authentication.

This approach guarantees:

- Proper password encryption
- Consistent user roles
- Secure authentication
- Simplified administrator management

---

# Running the Project Locally

## Backend

Navigate into the backend directory.

```
cd backend
```

Configure your PostgreSQL database.

Update:

```
application.properties
```

Run the application.

```
./mvnw spring-boot:run
```

or

```
mvn spring-boot:run
```

Backend runs on:

```
http://localhost:8081
```

---

## Frontend

Navigate into the frontend directory.

```
cd frontend
```

Install dependencies.

```
npm install
```

Create a `.env` file.

```
VITE_API_BASE_URL=http://localhost:8081/api
```

Start the development server.

```
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

# Production Deployment

## Backend

Hosted on Render.

Environment variables required:

- DATABASE_HOST
- DATABASE_NAME
- DATABASE_USERNAME
- DATABASE_PASSWORD
- JWT_SECRET
- JWT_EXPIRATION

---

## Frontend

Hosted on Vercel.

Environment variable required:

```
VITE_API_BASE_URL=https://product-management-backend-a49g.onrender.com/api
```

---

# API Overview

Authentication

```
POST /api/auth/login
```

Products

```
GET /api/products
POST /api/products
PUT /api/products/{id}
DELETE /api/products/{id}
```

Users

```
GET /api/users
POST /api/users/register
PUT /api/users/{id}
DELETE /api/users/{id}
PUT /api/users/{id}/promote
PUT /api/users/{id}/demote
```

Profile

```
GET /api/profile
```

---

# Design Decisions

The project follows a layered architecture to improve maintainability and scalability.

Backend layers include:

- Controllers
- Services
- Repositories
- DTOs
- Security
- Configuration

The frontend is organized into reusable modules:

- Components
- Pages
- Services
- Contexts
- Layouts
- Routes
- API Layer

JWT authentication: provides stateless authentication suitable for REST APIs.

Flyway: ensures database versioning and repeatable migrations.

---

# Assumptions

The following assumptions were made during development:

- Only authenticated users can access protected resources.
- User accessing the website must be a prior registered user; or can register via pgadmin4
- Product data is stored permanently in PostgreSQL.

---

# Known Limitation

This project is hosted using Render's Free Tier. 

Therefore, the backend automatically becomes inactive after some while and may take some seconds (30 - 60) for first request (login). 

Subsequent requests are significantly faster.

Future improvements include:

- Optimizing backend startup time
- Introducing caching
- Deploying on production-grade infrastructure (to reduce the delay/latency)
- Adding automated testing

---

# Author

**Justin Kamente**

GitHub

https://github.com/Kamente
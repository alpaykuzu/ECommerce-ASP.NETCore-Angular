# 🛒 ECommerce Full Stack Application

A modern, scalable, and extensible full-stack E-Commerce platform built with **ASP.NET Core 7.0 (Onion Architecture)** on the backend and **Angular 15** on the frontend. This project is a robust, production-ready foundation for any e-commerce venture.

---

## ✨ Project Overview

This project showcases a real-world implementation of an e-commerce system using modern web technologies and best practices. It features a layered backend architecture designed for scalability and maintainability, decoupled from a sleek, responsive Angular frontend. The system supports a full range of e-commerce features, from user authentication to real-time order tracking.

---

## 🔧 Tech Stack

| Layer              | Technology                                 |
| ------------------ | ------------------------------------------ |
| **Frontend**       | Angular 15, TypeScript, RxJS, SCSS         |
| **Backend API**    | ASP.NET Core 7.0 (Onion Architecture)      |
| **Authentication** | ASP.NET Identity, JWT Bearer Tokens        |
| **Database**       | PostgreSQL                                 |
| **Realtime**       | SignalR                                    |
| **Logging**        | Serilog + PostgreSQL + Seq                 |
| **File Storage**   | Azure Blob Storage / Local Storage         |
| **Validation**     | FluentValidation                           |
| **DI & Config**    | Built-in ASP.NET Core DI, appsettings.json |

---

## 🧠 Architectural Highlights

The backend is built on the **Onion Architecture**, a variation of Clean Architecture, which places the business logic and domain model at the core of the application.

### Separation of Concerns

* **Domain Layer**: Contains core business entities and interfaces, remaining completely independent.
* **Application Layer**: Defines the business logic and use cases, implementing the **CQRS** pattern via **MediatR**.
* **Infrastructure Layer**: Provides implementations for external services (e.g., Email, Authentication).
* **Persistence Layer**: Handles all data access logic with repository pattern (read/write separation).
* **Presentation Layer (API)**: The entry point of the application, responsible for handling HTTP requests and responses.

This layered approach guarantees testability, flexibility, and decoupling.

---

## 🗂️ Project Structure

```
ECommerce-ASP.NETCore-Angular-main/
├── ECommerceAPI/                 # ASP.NET Core backend
│   ├── Core/                     # The core of the Onion (Domain & Application)
│   │   ├── ECommerceAPI.Domain   # Business entities and contracts
│   │   └── ECommerceAPI.Application # Business logic & CQRS with MediatR
│   ├── Infrastructure/           # External service implementations
│   │   ├── ECommerceAPI.Infrastructure # Services like email, JWT, and external auth
│   │   ├── ECommerceAPI.Persistence # Database access layer
│   │   └── ECommerceAPI.SignalR # Real-time communication services
│   └── Presentation/             # The entry point
│       └── ECommerceAPI.API      # Controllers, middleware, and startup configuration
└── ECommerceClient/              # Angular frontend (v15)
    └── src/                      # Main frontend application code
```

---

## 🚀 Getting Started

### 🪰 Prerequisites

* .NET 7 SDK
* Node.js (v16+ recommended)
* Angular CLI: `npm install -g @angular/cli`
* PostgreSQL server
* (Optional) Azure Blob Storage account

### 🔧 Backend Setup

```bash
cd ECommerceAPI/ECommerceAPI.API
```

1. Update **appsettings.json**:

   * PostgreSQL connection string
   * JWT Token settings (key, issuer, audience)
   * File Storage (Local or Azure)
   * Serilog PostgreSQL logging config

2. Apply migrations and run:

```bash
dotnet ef database update
dotnet run
```

API available at: `https://localhost:5001`

### 🌐 Frontend Setup

```bash
cd ECommerceClient
npm install
ng serve
```

App available at: `http://localhost:4200`

---

## 🔒 Authentication & Authorization

* **ASP.NET Identity** for user management.
* **JWT-based authentication** secures all API endpoints.
* **Role-based authorization** (e.g., Admin for product management).
* `IUserService` handles password resets & refresh tokens.

---

## 📸 File Upload Support

* Pluggable **file storage system**.
* `IStorageService` abstracts file storage logic.
* Switch between **Azure Blob Storage** or **LocalStorageService** easily.

---

## 🔄 Real-time Notifications (SignalR)

* SignalR hubs: `ProductHub`, `OrderHub`.
* Angular client connects via WebSockets for live updates.

---

## 📝 Logging

* **Serilog** integrated with Console, File, PostgreSQL, and Seq.
* `UsernameColumnWriter` enriches logs with user context.
* Global error handling with `ConfigureExceptionHandlerExtension`.

---

## 🧰 Testing

* **Frontend**: Karma & Jasmine for unit tests.
* **Backend**: Supports unit & integration testing per layer.
* Centralized **exception handling** ensures consistent error responses.

---

## 📦 Services & Features

* **OrderService**: Order management, eager loading with related entities, paging.
* **UserService**: User creation, refresh token management, secure password reset.
* **BasketService**: Shopping cart operations integrated with orders.
* **Hub Services**: `OrderHubService` & `ProductHubService` enable server-side push notifications.

---



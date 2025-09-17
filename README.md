```markdown
# 🛒 ECommerce Full Stack Application 

A modern, scalable, and extensible full-stack E-Commerce platform built with ASP.NET Core 7.0 (Clean Architecture)
 on the backend and Angular 15 on the frontend.

## ✨ Project Overview

This project demonstrates a real-world implementation of an e-commerce system using modern web technologies and best practices. It supports user authentication, product and category management, image/file storage, SignalR-based real-time updates, and JWT-based secure API access.

### 🔧 Tech Stack

| Layer              | Technology                            |
|-------------------|----------------------------------------|
| Frontend          | Angular 15, TypeScript, RxJS, SCSS     |
| Backend API       | ASP.NET Core 7.0 (Clean Architecture)  |
| Authentication    | ASP.NET Identity, JWT Bearer Tokens    |
| Database          | PostgreSQL                             |
| Realtime Support  | SignalR                                |
| Logging           | Serilog + PostgreSQL                   |
| File Storage      | Azure Blob / Local Storage             |
| Validation        | FluentValidation                       |
| DI & Configuration| Built-in ASP.NET Core DI, appsettings  |

---

## 🗂️ Project Structure

```

ECommerce-ASP.NETCore-Angular-main/
├── ECommerceAPI/               # ASP.NET Core backend
│   ├── Core/                   # Domain and Application layers
│   ├── Infrastructure/         # Storage, Persistence, SignalR, Filters, Services
│   ├── Presentation/           # API layer with Controllers, Configurations, Middleware
│   └── ECommerceAPI.sln        # Solution file
└── ECommerceClient/            # Angular frontend (v15)
└── src/                    # Main frontend application code

````

---

## 🚀 Getting Started

### 🪰 Prerequisites

- [.NET 7 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/7.0)
- [Node.js](https://nodejs.org/) (v16+ recommended)
- Angular CLI: `npm install -g @angular/cli`
- PostgreSQL server (locally or remote)
- (Optional) Azure Blob Storage account if using AzureStorageService

---

## 🔧 Backend Setup

### 1. Navigate to Backend Project:

```bash
cd ECommerceAPI/ECommerceAPI.API
````

### 2. Update Configuration

Edit `appsettings.json` and `appsettings.Development.json` to provide:

* PostgreSQL connection string
* JWT Token settings
* Azure Blob Storage or Local settings
* Serilog PostgreSQL connection

### 3. Apply Migrations and Run:

```bash
dotnet ef database update
dotnet run
```

API will be available at: `https://localhost:5001`

---

## 🌐 Frontend Setup

### 1. Navigate to Angular Client

```bash
cd ECommerceClient
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
ng serve
```

The app will be available at: `http://localhost:4200`

---

## 🔒 Authentication & Authorization

* Uses **ASP.NET Identity** for user management.
* Token-based authentication with **JWT**.
* Role-based authorization and custom claims.
* Refresh tokens (if configured) for session renewal.

---

## 📸 File Upload Support

* Pluggable file storage system.
* Supports **LocalStorageService** and **AzureBlobStorageService**.
* Easily switchable via `IStorageService` interface in Infrastructure layer.

---

## 🔄 Real-time Notifications (SignalR)

* SignalR hub enabled for **order updates**, **stock changes**, etc.
* Configure the hub route in `Startup.cs`.
* Angular client connects using WebSocket via SignalR JavaScript client.

---

## 📦 Package Scripts

### Angular CLI commands

* `ng build` – Build frontend
* `ng test` – Run unit tests
* `ng lint` – Lint the codebase
* `ng generate` – Generate components/services/etc.

---

## 📝 Logging

* Integrated with **Serilog**
* Logs stored in **PostgreSQL** via `Serilog.Sinks.PostgreSQL`
* Custom `ColumnWriters` used for structured log fields

---

## 🧰 Testing

* Angular unit testing configured with Karma & Jasmine.
* ASP.NET Core backend can be tested via xUnit/NUnit (not provided yet).
* Consider writing integration tests for `ECommerceAPI.Application` layer.

---

## 📌 Future Enhancements

* Payment Gateway integration (e.g., Stripe, PayPal)
* Advanced filtering and search
* Admin Dashboard and analytics
* Multi-tenant support
* Unit and integration test coverage

---

## 🙌 Contributing

Feel free to fork, clone, and extend this project. PRs are welcome!

---

## 📄 License

This project is licensed under the MIT License.

---

## 🔗 Useful Links

* [ASP.NET Core Documentation](https://docs.microsoft.com/en-us/aspnet/core/)
* [Angular CLI Documentation](https://angular.io/cli)
* [Serilog](https://serilog.net/)
* [SignalR](https://docs.microsoft.com/en-us/aspnet/core/signalr/introduction)

---

## 🧠 Author Note

This project was built using clean architectural principles (Separation of Concerns, SOLID) to create an enterprise-grade foundation for scalable e-commerce platforms.

```
```

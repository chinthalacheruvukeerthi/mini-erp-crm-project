# 🚀 Mini ERP CRM System

A full-stack **Mini ERP CRM System** developed using **React.js, Node.js, Express.js, and MySQL**. This application helps businesses efficiently manage customers, products, inventory, and sales through a modern dashboard.

---

# 📖 Project Overview

Mini ERP CRM is designed to simplify daily business operations by providing modules for:

- Customer Management
- Product Management
- Inventory Management
- Sales & Invoice Generation
- Dashboard Analytics

The system automatically updates inventory after every sale and provides business statistics through a centralized dashboard.

---

# ✨ Features

## 🔐 Authentication
- User Login
- Secure Authentication
- Logout

---

## 👥 Customer Management

- Add Customer
- Edit Customer
- Delete Customer
- Search Customer
- Customer Status
- Business Details
- GST Number
- Follow-up Date
- Notes

---

## 📦 Product Management

- Add Product
- Update Product
- Delete Product
- Category
- Brand
- Supplier
- Purchase Price
- Selling Price
- Product Status
- Quantity Management

---

## 📋 Inventory Management

- Stock In
- Stock Out
- Inventory History
- Remarks
- Automatic Product Quantity Update

---

## 🧾 Sales & Invoice

- Customer Selection
- Product Selection
- Quantity Entry
- Automatic Price Calculation
- Automatic Total Calculation
- Invoice Generation
- Automatic Stock Reduction
- Sales History

---

## 📊 Dashboard

Displays real-time statistics:

- 👥 Total Customers
- 📦 Total Products
- 📋 Inventory Transactions
- 🧾 Total Sales
- 💰 Total Revenue

---

# 🛠 Tech Stack

## Frontend

- React.js
- React Router DOM
- Axios
- Bootstrap 5

## Backend

- Node.js
- Express.js

## Database

- MySQL

## Tools

- Git
- GitHub
- VS Code
- Postman

---

# 📁 Project Structure

```
mini-erp-crm-project/
│
├── backend/
│   │
│   ├── controllers/
│   │     ├── authController.js
│   │     ├── customerController.js
│   │     ├── productController.js
│   │     ├── inventoryController.js
│   │     └── salesController.js
│   │
│   ├── routes/
│   │     ├── authRoutes.js
│   │     ├── customerRoutes.js
│   │     ├── productRoutes.js
│   │     ├── inventoryRoutes.js
│   │     └── salesRoutes.js
│   │
│   ├── db.js
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── frontend/
│   │
│   ├── public/
│   │
│   ├── src/
│   │     │
│   │     ├── pages/
│   │     │     ├── Login.jsx
│   │     │     ├── Dashboard.jsx
│   │     │     ├── Customers.jsx
│   │     │     ├── Products.jsx
│   │     │     ├── Inventory.jsx
│   │     │     └── Sales.jsx
│   │     │
│   │     ├── services/
│   │     │     └── api.js
│   │     │
│   │     ├── App.jsx
│   │     ├── main.jsx
│   │     └── index.css
│   │
│   ├── package.json
│   └── vite.config.js
│
├── README.md
└── package.json
```

---

# 🗄 Database Tables

```
users

customers

products

inventory

sales
```

---

# ⚙ Installation

## Clone Repository

```bash
git clone https://github.com/chinthalacheruvukeerthi/mini-erp-crm-project.git
```

---

## Backend Setup

```bash
cd backend
```

Install dependencies

```bash
npm install
```

Create `.env`

```env
PORT=5000

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=mini_erp_crm

JWT_SECRET=your_secret_key
```

Run backend

```bash
npm run dev
```

---

## Frontend Setup

```bash
cd frontend
```

Install packages

```bash
npm install
```

Run frontend

```bash
npm run dev
```

---

# 📡 REST APIs

## Authentication

| Method | Endpoint |
|---------|----------|
| POST | /api/auth/login |

---

## Customers

| Method | Endpoint |
|---------|----------|
| GET | /api/customers |
| POST | /api/customers |
| PUT | /api/customers/:id |
| DELETE | /api/customers/:id |
| GET | /api/customers/count |

---

## Products

| Method | Endpoint |
|---------|----------|
| GET | /api/products |
| POST | /api/products |
| PUT | /api/products/:id |
| DELETE | /api/products/:id |
| GET | /api/products/count |

---

## Inventory

| Method | Endpoint |
|---------|----------|
| GET | /api/inventory |
| POST | /api/inventory |
| GET | /api/inventory/count |

---

## Sales

| Method | Endpoint |
|---------|----------|
| GET | /api/sales |
| POST | /api/sales |
| GET | /api/sales/count |
| GET | /api/sales/revenue |

---

# 🔄 Application Workflow

```
User Login
      │
      ▼
Dashboard
      │
      ├── Customers
      │       │
      │       └── CRUD Operations
      │
      ├── Products
      │       │
      │       └── CRUD Operations
      │
      ├── Inventory
      │       │
      │       ├── Stock In
      │       └── Stock Out
      │
      └── Sales
              │
              ├── Select Customer
              ├── Select Product
              ├── Generate Invoice
              └── Reduce Product Stock
```

---

# 📈 Dashboard Statistics

The dashboard displays live information including:

- Total Customers
- Total Products
- Inventory Transactions
- Total Sales
- Total Revenue

---

# 🔮 Future Enhancements

- PDF Invoice Download
- Excel Export
- Sales Reports
- Inventory Reports
- Charts & Analytics
- Low Stock Alerts
- Email Notifications
- Role-Based Authentication
- Dark Mode
- Mobile Responsive UI

---

# ✅ Conclusion

The **Mini ERP CRM System** successfully provides a centralized platform for managing customers, products, inventory, and sales operations. The application streamlines daily business activities through an intuitive dashboard, automated inventory updates, and invoice generation.

This project demonstrates the practical implementation of full-stack web development using **React.js, Node.js, Express.js, and MySQL**, following RESTful API architecture and CRUD operations. It also showcases database integration, frontend-backend communication, and real-time business statistics.

The system is scalable and can be further enhanced with features such as PDF invoice generation, report exports, role-based authentication, advanced analytics, and cloud deployment, making it suitable for small and medium-sized businesses.

Overall, this project provides a strong foundation for understanding Enterprise Resource Planning (ERP) and Customer Relationship Management (CRM) concepts while applying modern web development technologies.

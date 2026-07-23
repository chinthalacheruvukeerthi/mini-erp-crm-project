# Mini ERP CRM System

## Project Overview

Mini ERP CRM System is a full-stack web application developed to simplify customer and product management for small and medium-sized businesses. The application provides a secure login system, an interactive dashboard, and separate modules to manage customers and products efficiently.

The project follows a client-server architecture where the frontend communicates with the backend through REST APIs, and all application data is stored in a MySQL database.

---

# Problem Statement

Many small businesses maintain customer and product information manually using spreadsheets or paper records. This process is time-consuming, error-prone, and difficult to maintain.

The Mini ERP CRM System addresses these challenges by providing a centralized web application that allows users to securely manage customers and products through a simple interface.

---

# Objectives

- Develop a secure ERP CRM web application.
- Manage customer information efficiently.
- Manage product inventory.
- Perform CRUD (Create, Read, Update, Delete) operations.
- Connect the application with a MySQL database.
- Provide a responsive and user-friendly interface.

---

# System Architecture

```
                React Frontend
                      │
                      │ REST API
                      ▼
            Node.js + Express Backend
                      │
                      ▼
                MySQL Database
```

---

# Technologies Used

## Frontend

- React.js
- Bootstrap 5
- Axios
- React Router DOM
- HTML5
- CSS3
- JavaScript (ES6)

---

## Backend

- Node.js
- Express.js
- JWT Authentication
- bcryptjs
- dotenv
- CORS

---

## Database

- MySQL

---

# Features

## Authentication

- Secure Login
- JWT Authentication
- Logout Functionality

---

## Dashboard

- Easy Navigation
- Customer Module
- Product Module

---

## Customer Management

- Add Customer
- View Customer List
- Update Customer Details
- Delete Customer

---

## Product Management

- Add Product
- View Product List
- Update Product Details
- Delete Product

---

# Project Structure

Mini ERP CRM
│
├── Login
├── Dashboard
│
├── Customer Management
│     ├── Search
│     ├── Add
│     ├── Update
│     ├── Delete
│
├── Product Management
│     ├── Search
│     ├── Add
│     ├── Update
│     ├── Delete
│
├── Inventory
│     ├── Stock In
│     ├── Stock Out
│     ├── Low Stock
│
├── Sales
│     ├── Invoice
│     ├── Bill
│     ├── Customer Purchase
│
└── Reports
      ├── Sales Report
      ├── Customer Report
      └── Product Report



# Database Configuration

Create a MySQL database.

```
Database Name

mini_erp_crm
```

Create a `.env` file inside the backend folder.

```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=mini_erp_crm
JWT_SECRET=your_secret_key
PORT=5000
```

---

# Installation Guide

## Step 1

Clone the repository.

```bash
git clone https://github.com/chinthalacheruvukeerthi/mini-erp-crm-project.git
```

---

## Step 2

Move into the project directory.

```bash
cd mini-erp-crm-project
```

---

## Step 3

Install Backend Dependencies

```bash
cd backend
npm install
```

---

## Step 4

Install Frontend Dependencies

```bash
cd ../frontend
npm install
```

---

## Step 5

Start Backend Server

```bash
cd ../backend
npm run dev
```

Server runs on:

```
http://localhost:5000
```

---

## Step 6

Start Frontend

```bash
cd ../frontend
npm run dev
```

Application runs on:

```
http://localhost:5173
```

---

# API Modules

### Authentication

- Login

### Customers

- Add Customer
- Get Customers
- Update Customer
- Delete Customer

### Products

- Add Product
- Get Products
- Update Product
- Delete Product

---

# Advantages

- Easy to use interface
- Secure authentication
- Fast CRUD operations
- Responsive design
- Real-time database integration
- Scalable architecture
- Organized project structure

---

# Future Enhancements

- Order Management
- Invoice Generation
- Sales Analytics Dashboard
- User Roles & Permissions
- Email Notifications
- Search & Filter
- Export Reports (PDF & Excel)
---

Conclusion

The Mini ERP CRM System demonstrates the implementation of a complete full-stack web application using React, Node.js, Express, and MySQL. The project successfully integrates frontend, backend, authentication, REST APIs, and database operations to provide an efficient ERP CRM solution suitable for small business environments.
 
 

This project is developed for educational purposes and company case study evaluation.

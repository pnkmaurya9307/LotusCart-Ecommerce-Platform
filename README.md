<div align="center">

# 🛒 LotusCart

**A full-stack MERN e-commerce platform with a customer storefront, secure checkout, and a dedicated admin dashboard.**

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://lotuscart-ecommerce-platform-frontend.onrender.com)
[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?logo=node.js&logoColor=white)](#)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](#)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?logo=mongodb&logoColor=white)](#)
[![License](https://img.shields.io/badge/license-MIT-blue)](LICENSE)

[Live Demo](https://lotuscart-ecommerce-platform-frontend.onrender.com) · [Report Bug](https://github.com/pnkmaurya9307/LotusCart-Ecommerce-Platform/issues) · [Request Feature](https://github.com/pnkmaurya9307/LotusCart-Ecommerce-Platform/issues)

</div>

---

## 📖 About The Project

**LotusCart** is a complete e-commerce solution built with the MERN stack (MongoDB, Express, React, Node.js). It consists of two separate React applications — a **customer-facing storefront** and a **standalone admin panel** — backed by a single REST API.

Customers can browse products, search and filter by category, manage a cart, and check out using either **Cash on Delivery** or **Razorpay** online payments. Authentication supports both traditional email/password login and **Google Sign-In** via Firebase. Admins get a separate panel to add/manage products (with Cloudinary image hosting) and process incoming orders.

### ✨ Key Features

**Customer Storefront**
- 🔐 User authentication — email/password signup & login, plus Google OAuth (Firebase)
- 🛍️ Product browsing with category/sub-category filters and search
- 🛒 Persistent shopping cart with size selection and quantity updates
- 💳 Checkout with **Razorpay** (online payment) or **Cash on Delivery**
- 📧 Automated order confirmation emails (via Resend)
- 📦 Order history and order status tracking
- 📰 Newsletter subscription
- 📱 Fully responsive UI built with Tailwind CSS

**Admin Panel**
- 🔑 Secure, separate admin authentication
- ➕ Add new products with multi-image upload (Cloudinary)
- 📋 View and remove products from the catalog
- 📦 View all customer orders and update order/delivery status

**Backend**
- 🔒 JWT-based authentication with HTTP-only cookies
- 🗄️ MongoDB + Mongoose data models for Users, Products, and Orders
- ☁️ Cloudinary integration for product image storage
- 💰 Razorpay payment gateway integration with server-side verification
- ✉️ Transactional emails via Resend

---

## 🧰 Tech Stack

| Layer | Technology |
|---|---|
| **Frontend (Storefront)** | React 19, React Router, Tailwind CSS, Axios, Firebase Auth, React Toastify |
| **Admin Panel** | React 19, React Router, Tailwind CSS, Axios |
| **Backend** | Node.js, Express 5, MongoDB, Mongoose |
| **Authentication** | JWT, bcrypt.js, Firebase (Google OAuth) |
| **Payments** | Razorpay |
| **Media Storage** | Cloudinary |
| **Email** | Resend |
| **Build Tool** | Vite |

---

## 🏗️ Project Structure

This is a monorepo containing three independent applications:

```
LotusCart/
├── backend/      # Express REST API (auth, products, cart, orders)
├── frontend/     # Customer-facing storefront (React + Vite)
└── admin/        # Admin dashboard (React + Vite)
```

Each folder has its own `package.json` and is deployed independently.

---

## 🚀 Live Demo

| App | Link |
|---|---|
| 🛍️ Storefront | [lotuscart-ecommerce-platform-frontend.onrender.com](https://lotuscart-ecommerce-platform-frontend.onrender.com) |
| 🛠️ Admin Panel | [lotuscart-ecommerce-platform-admin-il09.onrender.com](https://lotuscart-ecommerce-platform-admin-il09.onrender.com) |
| ⚙️ Backend API | [lotuscart-ecommerce-platform-backend-us5d.onrender.com](https://lotuscart-ecommerce-platform-backend-us5d.onrender.com) |

> **Note:** This project is deployed on [Render](https://render.com).

---

## ⚡ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [MongoDB](https://www.mongodb.com/) (local or [Atlas](https://www.mongodb.com/atlas))
- Accounts/API keys for: [Cloudinary](https://cloudinary.com/), [Razorpay](https://razorpay.com/), [Resend](https://resend.com/), [Firebase](https://firebase.google.com/)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/pnkmaurya9307/LotusCart-Ecommerce-Platform.git
   cd LotusCart-Ecommerce-Platform
   ```

2. **Set up the Backend**
   ```bash
   cd backend
   npm install
   ```
   Create a `.env` file in `backend/` with the following variables:
   ```env
   PORT=4000
   MONGODB_URL=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ADMIN_EMAIL=your_admin_email
   ADMIN_PASSWORD=your_admin_password
   CLOUDINARY_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   RAZORPAY_KEY_ID=your_razorpay_key_id
   RAZORPAY_KEY_SECRET=your_razorpay_key_secret
   RESEND_API_KEY=your_resend_api_key
   EMAIL_FROM=your_sender_email
   FRONTEND_URL=http://localhost:5173
   ADMIN_URL=http://localhost:5174
   NODE_ENV=development
   ```
   Run the server:
   ```bash
   npm run dev
   ```

3. **Set up the Frontend (Storefront)**
   ```bash
   cd ../frontend
   npm install
   ```
   Create a `.env` file in `frontend/` with:
   ```env
   VITE_FIREBASE_APIKEY=your_firebase_api_key
   VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
   VITE_SERVER_URL=http://localhost:4000
   VITE_ADMIN_URL=http://localhost:5174
   ```
   Run the app:
   ```bash
   npm run dev
   ```

4. **Set up the Admin Panel**
   ```bash
   cd ../admin
   npm install
   ```
   Create a `.env` file in `admin/` with:
   ```env
   VITE_BACKEND_URL=http://localhost:4000
   ```
   Run the app:
   ```bash
   npm run dev
   ```

---

## 🔌 API Overview

| Module | Base Route | Description |
|---|---|---|
| Auth | `/api/auth` | Registration, login, Google login, admin login, logout |
| User | `/api/user` | Get current user, get admin info |
| Product | `/api/product` | List, add, and remove products |
| Cart | `/api/cart` | Add, update, and fetch cart items |
| Order | `/api/order` | Place orders (COD/Razorpay), verify payment, view/update order status |
| Subscribe | `/api/subscribe` | Newsletter subscription |

> Detailed request/response schemas can be added here or linked to API documentation (e.g. Postman collection).

---

## 🗺️ Roadmap

- [ ] Add product reviews and ratings
- [ ] Add wishlist functionality
- [ ] Add order tracking with delivery partner integration
- [ ] Write automated tests (unit/integration)
- [ ] Add CI/CD pipeline

See the [open issues](https://github.com/pnkmaurya9307/LotusCart-Ecommerce-Platform/issues) for a full list of proposed features and known issues.

---

## 🤝 Contributing

Contributions make the open-source community a great place to learn and create. Any contributions you make are greatly appreciated.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

Distributed under the MIT License. See [LICENSE](https://github.com/pnkmaurya9307/LotusCart-Ecommerce-Platform/blob/main/LICENSE) for more information.

---
## 📬 Contact

**Pankaj Maurya** — pnkmaurya9307@gmail.com

Project Link: [https://github.com/pnkmaurya9307/LotusCart-Ecommerce-Platform](https://github.com/pnkmaurya9307/LotusCart-Ecommerce-Platform)

---

<div align="center">

If you found this project helpful, consider giving it a ⭐!

</div>
# 🛍️ WishLink

A **full-stack e-commerce platform** that allows sellers to list products of their choice from different websites like amazon, flipkart and myntra. and buyers to browse and purchase items. The backend includes **web scraping in JavaScript**, **role-based access control (RBAC)**, and **user authentication**. The project is **deployed on Render**.

## 🚀 Features

### ✅ Web Scraping in JavaScript
- Uses **Puppeteer** to extract product details dynamically from **Flipkart, Amazon, and Myntra**.
- Automatically fetches **name, price, description, and images** when a seller adds a product using a URL.
- Prevents bot detection using **user-agent spoofing**.

### 🔐 Role-Based Access Control (RBAC)
- **Seller**: Can add, update, and delete their choice of products.
- **Buyer**: Can view all products, see seller details, and place orders.
- Role-based middleware restricts unauthorized actions.

### 🔑 User Authentication
- **JWT-based authentication** ensures secure access.
- Users must log in before adding products or making purchases.
- Tokens are stored in **localStorage** for persistent sessions.

### 🌍 Deployment on Render
- **Backend (Express + MySQL)** is hosted on **Render**.
- **Frontend (React + Vite)** is also deployed on Render.
- Uses a **managed MYSQL database** (as clever cloud supports PostgreSQL for free).

## 🏗️ Tech Stack
- **Frontend**: React, Vite, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MySQL (Locally) → MySQL (Deployed on Clever Cloud)
- **Scraping**: Puppeteer
- **Authentication**: JWT
- **Hosting**: Render

## ⚡ Setup & Installation
### 1️⃣ Clone the repository FRONTEND
```bash
git clone https://github.com/yourusername/wishlink.git
cd wishlink
```

### 2️⃣ Install dependencies
```bash
npm install
cd frontend && npm install
```

### 3️⃣ Set up environment variables
Create a `.env` file in the **backend** folder:
```env
PORT=5000
DB_HOST=your-database-host
DB_USER=your-database-username
DB_PASSWORD=your-database-password
DB_NAME=your-database-name
JWT_SECRET=your-secret-key
```

### 4️⃣ Run the project
#### Start the backend
```bash
cd backend
npm start
```

#### Start the frontend
```bash
cd frontend
npm run dev
```

## 🌐 API Endpoints
### 🔹 **Authentication**
| Method | Endpoint      | Description       |
|--------|-------------|------------------|
| POST   | /users/register | Register a user  |
| POST   | /users/login  | Authenticate user |

### 🔹 **Products**
| Method | Endpoint      | Access  | Description  |
|--------|-------------|---------|--------------|
| GET    | /products   | Buyer   | View all products |
| POST   | /products   | Seller  | Add a product (scrapes details) |
| PUT    | /products/:id | Seller | Update own product |
| DELETE | /products/:id | Seller | Delete own product |

### 🔹 **Orders**
| Method | Endpoint       | Access  | Description |
|--------|--------------|---------|-------------|
| GET    | /orders       | Buyer   | View buyer's orders |
| POST   | /orders       | Buyer   | Place an order |

## 🛠️ Deployment on Render
1. **Create a SQL database on Clever Cloud.**
2. **Deploy the backend on Render:**
   - Connect GitHub repo
   - Set up environment variables
   - Deploy and get the API URL
3. **Deploy the frontend on Render:**
   - Connect GitHub repo
   - Set API URL in frontend `.env`
   - Deploy and get the frontend URL

## 🎯 Future Enhancements
- Add payment integration (Razorpay/Stripe)
- Implement email notifications for orders
- Improve web scraping resilience

## 🤝 Contributing
Pull requests are welcome! For major changes, please open an issue first.

## 📜 License
This project is licensed under the MIT License.

---
Made by Omkar Sunil Kulkarni


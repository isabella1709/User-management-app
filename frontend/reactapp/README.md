# User Management System

This project is a complete user management system built with **React** on the frontend and **Node.js + MySQL** on the backend. It allows users to **list**, **add**, **edit**, **view**, and **delete**.

## 🖥️ Technologies Used

### Frontend

* [React](https://reactjs.org/)
* [React Router DOM](https://reactrouter.com/)
* CSS for styling

### Backend

* [Node.js](https://nodejs.org/) and npm
* [MySQL](https://www.mysql.com/)
* [React](https://reactjs.org/) (installed via `npm install`)
* (Optional) [Yarn](https://yarnpkg.com/)

## 🚀 Features

* **User listing** with detailed view (`/list`)
* **Add new user** (`/add`)
* **Edit existing user** (`/edit/:id`)
* **View full user details** (`/details/:id`)
* **Delete user** with confirmation

## 🛠️ Database Configuration

Use the following SQL script to create the database and `users` table:

```sql
CREATE DATABASE IF NOT EXISTS crud_users;

USE crud_users;

CREATE TABLE IF NOT EXISTS users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(100) NOT NULL,
  sobrenome VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  genero VARCHAR(20) NOT NULL,
  anoNascimento INT NOT NULL,
  cpf VARCHAR(20) NOT NULL
);
```

> Make sure the database access credentials are properly configured in the `db.js` file.

## 🚀 How to Run the Project Locally

### Prerequisites

* [Node.js](https://nodejs.org/) and npm
* [MySQL](https://www.mysql.com/)
* [React](https://reactjs.org/) (installed via `npm install`)
* [React Router DOM](https://reactrouter.com/) (`npm install react-router-dom`)
* (Optional) [Yarn](https://yarnpkg.com/)

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

### 2. Configure the Database

Run the `crud_users.sql` script on your MySQL server:

```bash
mysql -u your_user -p < crud_users.sql
```

### 3. Backend

```bash
cd backend
npm install
npm start
```

The backend will be available at `http://localhost:8800`.

### 4. Frontend

```bash
cd frontend
npm install
npm start
```

The frontend will start at `http://localhost:3000`.

## ✨ Layout

The project features a dark, responsive layout with styled buttons, visual feedback, and well-organized forms.

## 👤 Author

Developed by **Isabella Vanderlinde Berkembrock**.

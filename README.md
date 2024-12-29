# Node.js User Authentication Boilerplate

- [Check it out](https://authentication-boilerplate-hyd3.onrender.com) 

This project is a Node.js boilerplate designed for user authentication. It provides a basic structure that can be easily extended for various applications. The boilerplate uses Pug for templating, Passport.js for authentication, Express for routing, and SQLite for storing user data.

## Features

- User registration and login
- Session management
- Basic dashboard view
- SQLite database for user storage

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js
- npm (Node Package Manager)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/iamlego/authentication-boilerplate.git
   cd authentication-boilerplate
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Start the server:**

   ```bash
   npm start
   ```

4. **Project Structure:**

  ```plaintext
AUTHENTICATION-BOILERPLATE/
├── controllers/
│   ├── auth.js
│   └── dashboard.js
├── models/
│   └── User.js
├── node_modules/
├── routes/
│   ├── auth.js
│   └── dashboard.js
├── views/
│   ├── dashboard.pug
│   ├── layout.pug
│   ├── login.pug
│   └── register.pug
├── .gitignore
├── auth.js
├── db.js
├── user.sqlite
├── package-lock.json
├── package.json
└── server.js
```

3. **Dependencies**

- [Express](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js.
- [Passport.js](https://www.passportjs.org/) - Authentication middleware for Node.js.
- [Pug](https://pugjs.org/api/getting-started.html) - High-performance template engine.
- [SQLite](https://www.sqlite.org/index.html) - Lightweight, disk-based database.

## Contribution
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch for your feature/bug fix.
3. Commit your changes and create a pull request.

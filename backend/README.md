# Backend of Testing-Ground

This is the backend application for Testing-Ground, built with Node.js, Express, and MongoDB. It provides RESTful APIs for the frontend to interact with.

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: Install the latest stable version from [Node.js](https://nodejs.org/).
- **MongoDB**: Install MongoDB and ensure it is running locally or in the cloud.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/phurst-gh/Testing-Ground
   cd Testing-Ground/backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm run start
   ```

4. The server will run on:
   ```
   http://localhost:5000
   ```

---

## 📂 File Structure

```
backend/
├── src/
│   ├── controllers/    # Business logic for routes
│   ├── models/         # MongoDB schemas
│   ├── routes/         # API endpoints
│   ├── app.js          # Express application setup
│   └── server.js       # Server initialization
├── .env                # Environment variables
└── package.json        # Dependencies and scripts
```

---

## 📋 Environment Variables

Create a `.env` file in the `backend/` directory with the following:

```env
PORT=3001
MONGO_URI=mongodb://localhost:27017/testing-ground
JWT_SECRET=your_jwt_secret
```

Replace these values with your actual configuration.

---

## ⚡ Available Scripts

- `npm start`: Start the server in production.
- `npm run dev`: Start the server in development with live reload.
- `npm run test`: Run the test suite.

---

## 📚 Learn More

- [Express Documentation](https://expressjs.com/)
- [MongoDB Documentation](https://www.mongodb.com/docs/)
- [Passport (local strategy) Documentation](https://www.passportjs.org/packages/passport-local/)

---

## 👨‍💻 Contributing

Feel free to submit issues or pull requests. Contributions are welcome!

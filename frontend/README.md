# Frontend of Testing-Ground

This is the frontend application for Testing-Ground, built with React and Vite. It serves as the user interface for interacting with the backend API and demonstrates modular, component-based development.

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: Install the latest stable version from [Node.js](https://nodejs.org/).
- **npm** or **yarn**: Comes with Node.js. Use your preferred package manager.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/phurst-gh/Testing-Ground
   cd Testing-Ground/frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---

## 📂 File Structure

```
frontend/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/          # Page-level components
│   ├── hooks/          # Custom React hooks
│   ├── App.jsx         # Application entry point
│   └── index.jsx       # React DOM rendering
├── public/             # Static assets
└── vite.config.js      # Vite configuration
```

---

## 📋 Environment Variables

Create a `.env` file in the `frontend/` directory with the following:

```env
VITE_API_URL=http://localhost:3001
```

Replace the URL with your backend's address during production.

---

## ⚡ Available Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Create a production build.
- `npm run preview`: Preview the production build locally.

---

## 🛠️ Technologies Used

The following libraries and tools are utilized in this project:

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [Vite](https://vitejs.dev/) - A fast build tool for modern web projects.
- [React Router](https://reactrouter.com/) - For routing within the app.
- [Axios](https://axios-http.com/) - For handling HTTP requests.
- [Styled Components](https://styled-components.com/) - For styling React components with CSS-in-JS.

---

## 👨‍💻 Contributing

Feel free to submit issues or pull requests. Contributions are welcome!

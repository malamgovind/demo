# Demo Node.js Project

A lightweight REST API built with **Node.js**, **Express**, and **Mongoose**. This project is configured to use ES Modules (`import/export` syntax).

---

## 🚀 Features

- **Express Framework**: Fast, unopinionated web framework.
- **MongoDB Integration**: Data modeling via Mongoose.
- **Environment Variables**: Secure configuration using `dotenv`.
- **Development Workflow**: Automatic restarts with `nodemon`.

---

## 🛠️ Installation

1.  **Clone the repository:**

    ```bash
    git clone [https://github.com/your-username/demo.git](https://github.com/your-username/demo.git)
    cd demo
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Setup Environment Variables:**
    Create a `.env` file in the root directory and add your configuration:
    ```env
    PORT=3000
    MONGO_URI=your_mongodb_connection_string
    ```

---

## 🚦 Available Scripts

In the project directory, you can run:

- **`npm start`**: Runs the app in production mode using `node index.js`.
- **`npm run dev`**: Runs the app in development mode with **Nodemon** (restarts on file changes).
- **`npm test`**: Placeholder for running tests.

---

## 📁 Project Structure

```text
demo/
├── node_modules/
├── .env                # Environment variables (not tracked by Git)
├── index.js            # Entry point of the application
├── package.json        # Project metadata and dependencies
└── README.md           # Project documentation
```

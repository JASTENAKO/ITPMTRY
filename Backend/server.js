// const express = require('express');
// const app = express();
// const db = require('./db');
// const PORT = 3000;

// app.get('/test', (req, res) => {
//   db.query('SELECT 1', (err, result) => {
//     if (err) {
//       res.status(500).send('Database connection failed');
//     } else {
//       res.send('Database connection successful');
//     }
//   });
// });

// app.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });


// Import required modules
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

// Initialize app and port
const app = express();
const PORT = 3000;

// Middleware to handle CORS and JSON requests
app.use(cors());
app.use(express.json());

// ✅ MySQL Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",  // Change if necessary
  password: "",  // Update with your password
  database: "database_test",  // Update with your database name
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
    return;
  }
  console.log("Connected to MySQL");
});

// ✅ Login Route
app.post("/login", (req, res) => {
  const { user, password } = req.body;

  if (!user || !password) {
    return res.status(400).json({ success: false, message: "Missing credentials" });
  }

  // SQL query to check user and password in the "users" table
  const query = "SELECT * FROM users WHERE user = ? AND password = ?";
  
  db.query(query, [user, password], (err, results) => {
    if (err) {
      console.error("Query error:", err);
      return res.status(500).json({ success: false, message: "Database error" });
    }

    // Check if any matching user was found
    if (results.length > 0) {
      res.json({ success: true, token: "dummyToken123" }); // Send a dummy token for now
    } else {
      res.status(401).json({ success: false, message: "Invalid credentials" });
    }
  });
});

// ✅ Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

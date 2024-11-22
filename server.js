import express from "express";
import cors from "cors";
import mysql from "mysql2";
import bcrypt from "bcrypt";

const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');

const app = express();
const port = 5173; // Match the frontend port

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MySQL Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Replace with your MySQL username
  password: '', // Replace with your MySQL password
  database: 'enrollmentdatabase', // Replace with your database name
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to MySQL database');
});

// Login Route
app.post('/login', (req, res) => {
  const { ID, password } = req.body;

  // Validate input
  if (!ID || !password) {
    return res.status(400).json({ message: 'Missing ID or password' });
  }

  // Query to check credentials
  const query = 'SELECT * FROM login WHERE ID = ?';
  db.query(query, [ID], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Internal server error' });
    }

    if (results.length === 0) {
      // No user found
      return res.status(401).json({ message: 'Invalid ID or password' });
    }

    // Compare passwords
    const user = results[0];
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: 'Internal server error' });
      }

      if (isMatch) {
        // Successful login
        return res.status(200).json({ message: 'Login successful' });
      } else {
        // Invalid password
        return res.status(401).json({ message: 'Invalid ID or password' });
      }
    });
  });
});


// Start Server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

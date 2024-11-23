import express from 'express';
import db from '../config/db.js';

const router = express.Router();

router.get("/class", async (req, res) => {
  try {
    // Execute a query to retrieve all classes
    const [rows] = await db.promise().query('SELECT * FROM class');  // db.promise() converts the mysql2 query into a promise-based interface
    res.render("class.ejs", { classes: rows, user: req.session.passport  });
  } catch (err) {
    console.error('Error fetching classes:', err);
    res.status(500).send("Error fetching classes");
  }
});

export default router;

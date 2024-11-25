import express from 'express';
import db from '../config/db.js';

const router = express.Router();

router.get("/personalTraining", async (req, res) => {
  try {
    // Query to fetch all personal trainers
    const [rows] = await db.promise().query('SELECT * FROM personal_trainer'); // Use 'personal_trainer' table
    res.render("personalTraining.ejs", { trainers: rows, user: req.session.passport }); // Pass trainers data
  } catch (err) {
    console.error('Error fetching personal trainers:', err);
    res.status(500).send("Error fetching personal trainers");
  }
});

export default router;

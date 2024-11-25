import express from 'express';
import db from '../config/db.js';

const router = express.Router();

// Class Schedule
router.get("/class", async (req, res) => {
  try {
    const [rows] = await db.promise().query(
      "SELECT * FROM class c LEFT JOIN personal_trainer pt ON c.pt_ID = pt.pt_ID"
    );

    res.render("class.ejs", {
      classes: rows,
      message: null, // No message initially
      messageType: null, // No message type initially
    });
  } catch (err) {
    console.error('Error fetching classes:', err);
    res.status(500).send("Error fetching classes");
  }
});

// Add Class (POST)
router.post("/class/add", async (req, res) => {
    const username = req.session.passport.user;  // Check session for username
    if (!username) {
        return res.redirect('/login');  // Redirect if not logged in
    }

    const classId = req.body.c_ID; // Get class ID from form

    try {
        // Check if the user is already registered for the class
        const [existingClass] = await db.promise().query(
            "SELECT * FROM UserRegisterinClass WHERE username = ? AND c_id = ?",
            [username, classId]
        );

        if (existingClass.length > 0) {
            console.log(`User ${username} is already registered for class ${classId}`);
            return res.render("class.ejs", {
                message: "You are already registered for this class.",
                messageType: "error",
                classes: await getAllClasses(db),
            });
        }

        // Insert if not already registered
        await db.promise().query(
            "INSERT INTO UserRegisterinClass (username, c_id) VALUES (?, ?)",
            [username, classId]
        );
        console.log(`Class ${classId} added for user ${username}`);
        res.render("class.ejs", {
            message: "Successfully added to the class.",
            messageType: "success",
            classes: await getAllClasses(db),
        });
    } catch (err) {
        console.error("Error adding class:", err);
        res.status(500).render("class.ejs", {
            message: "An error occurred while adding the class.",
            messageType: "error",
            classes: [],
        });
    }
});

// Drop Class (POST)
router.post("/class/drop", async (req, res) => {
    const username = req.session.passport.user;  // Check session for username
    if (!username) {
        return res.redirect('/login');  // Redirect if not logged in
    }

    const classId = req.body.c_ID; // Get class ID from form

    try {
        // Remove user-class mapping
        await db.promise().query(
            "DELETE FROM UserRegisterinClass WHERE username = ? AND c_id = ?",
            [username, classId]
        );
        console.log(`Class ${classId} dropped for user ${username}`);
        res.render("class.ejs", {
            message: "Successfully dropped from the class.",
            messageType: "success",
            classes: await getAllClasses(db),
        });
    } catch (err) {
        console.error("Error dropping class:", err);
        res.status(500).render("class.ejs", {
            message: "An error occurred while dropping the class.",
            messageType: "error",
            classes: [],
        });
    }
});

async function getAllClasses(db) {
    const [rows] = await db.promise().query(
      "SELECT * FROM class c LEFT JOIN personal_trainer pt ON c.pt_ID = pt.pt_ID"
    );
    return rows;
}

export default router;

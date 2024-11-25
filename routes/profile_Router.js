import express from "express";
import db from '../config/db.js';

const router = express.Router();

router.get("/profile", async (req, res) => {
    try {
        // Ensure correct property from session, assuming `req.session.passport.user` contains the username
        const username = req.session.passport ? req.session.passport.user : null;
        console.log("Logged in Username:", username);
        
        if (!username) {
            // Redirect to login page if no user is found in the session
            return res.render("login.ejs", { user: null });
        }

        // Fetch user profile data from `users` and `membership` tables
        const [userData] = await db.promise().query(
            `SELECT 
                u.username, 
                u.u_Status AS u_status, 
                m.start_date AS startDate, 
                m.end_date AS endDate 
             FROM users u
             LEFT JOIN membership m ON u.username = m.username
             WHERE u.username = ?`,
            [username]
        );

        // Render profile page with user data
        if (userData.length > 0) {
            res.render("profile.ejs", { user: req.session.passport ,user_row: userData[0] });
        } else {
            // Handle case when no user data is found
            res.status(404).send("User profile not found.");
        }
    } catch (err) {
        console.error("Error fetching profile data:", err);
        res.status(500).send("An error occurred while fetching your profile.");
    }
});

export default router;

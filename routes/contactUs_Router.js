import express from "express";
import nodemailer from "nodemailer";

const router = express.Router();

// GET route to render the contact form
router.get("/contactUs", (req, res) => {
    res.render("contactUs.ejs",  { user: req.session.passport });
});

// POST route to handle form submissions
router.post("/contactUs", (req, res) => {
    const { email, message } = req.body;

    console.log(`New contact form submission:
    Email: ${email}
    Message: ${message}`);
    
    // Send a JSON response to the client
    res.json({ success: true });
});

export default router;
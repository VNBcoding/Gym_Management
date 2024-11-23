import express from "express";
const router = express.Router();
router.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.log("Failed to log out");
            return res.redirect('/');
        }
        res.redirect('/');
    });
});



export default router;
import express from "express";
const router = express.Router();

router.get('/', (req, res) => {
    if (req.session.passport && req.session.passport.user) {
        // If the user is authenticated, pass the user data to the view
        res.render("home.ejs", { user: req.session.passport, success:false  });
    } else {
        // If no user is authenticated, send a response without user data
        res.render("home.ejs", { user: null, success:false });
    }
});
export default router;
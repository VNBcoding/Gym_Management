import express from "express";
import passport from "../config/passport.js";

const router = express.Router();

router.get("/login",(req,res)=> {
    res.render("login.ejs",  { user: req.session.passport });
})
router.post('/login', passport.authenticate('local', {
    successRedirect: '/', // Redirect on successful login
    failureRedirect: '/login', // Redirect on failed login
})
);


export default router;
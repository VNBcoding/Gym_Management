import express from "express";
import passport from "../config/passport.js";
import db from "../config/db.js"
import bcrypt from "bcrypt";

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
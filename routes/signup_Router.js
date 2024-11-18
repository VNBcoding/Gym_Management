import express from "express";
import db from "../config/db.js";
import bcrypt from "bcrypt";

const router = express.Router();
const saltRounds = 10;

router.get("/signup", (req, res) => {
    res.render("signup.ejs");
})
router.post("/signup", async (req, res) => {
   try {
    const [duplicate] = await db.promise().query('SELECT * FROM users WHERE username = ?', [req.body.username])
    if(duplicate.length > 0){
        res.render('signup.ejs');
    }
    else{
        bcrypt.hash(req.body.password, saltRounds, async (err, hashpass) => {
            if(err){
                console.log("Error")
            }
            await db.promise().query('INSERT INTO users (username, u_password) VALUES (?, ?)',[req.body.username, hashpass])
            
        });
        res.render('login.ejs');
    }
   }
   catch(err){
    console.log("username is not available")
    res.render('signup.ejs');
   }
})
export default router;
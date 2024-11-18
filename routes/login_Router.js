import express from "express";
import db from "../config/db.js"
import bcrypt from "bcrypt";

const router = express.Router();

router.get("/login",(req,res)=> {
    res.render("login.ejs");
})
router.post("/login", async(req,res) => {
    try{
        const inputPassword = req.body.password;
        const [rows] = await db.promise().query('SELECT u_password FROM users WHERE username = ?', [req.body.username]);

        // If rows contains any results
        if (rows.length > 0) {
            const hashedpassword = rows[0].u_password;
            bcrypt.compare(inputPassword, hashedpassword, function(err, result) {
                if(result){
                    console.log("Login successfully")
                }
                else{
                    console.log("Login unsuccessfully")
                }
            });
            
        }
        else{
            console.log("There is wrong in the username/password ")
        }
    }
    catch(err){
        console.log(err);
    }

   
})
export default router;
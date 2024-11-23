import express from "express";
import db from "../config/db.js";

const router = express.Router();

// Membership page route
router.post("/process-payment", async (req, res) => {
    try{
        console.log(req.body);
        const amount =  parseInt(req.body.price, 10);
        const planname = req.body.plan_name;
        const method = req.body.paymentType;
        const username = req.session.passport.user;
        const [row] = await db.promise().query("INSERT INTO payments (method, amount, planname, username) VALUES (?, ?, ?, ?)", [method, amount, planname, username]);

        res.render("home.ejs", { user: req.session.passport, success:true  });
    }
    catch(err){
        console.log("Error inserting")
    }
})
   
   

export default router;
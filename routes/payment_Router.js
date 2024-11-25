import express from "express";
import db from "../config/db.js";

const router = express.Router();

// Membership page route
router.post("/process-payment", async (req, res) => {
    try{
        const planname = req.body.plan_name;
        const today = new Date();
        const startDate = today.toISOString().split('T')[0]; // "2024-11-23"
        switch (planname) {
            case 'Weekly':
                today.setDate(today.getDate() + 7); // Add 7 days
                break;
            case 'Monthly':
                today.setMonth(today.getMonth() + 1); // Add 1 month
                break;
            case 'Annually':
                today.setFullYear(today.getFullYear() + 1); // Add 1 year
                break;
            default:
                throw new Error('Invalid time type');
        }
        const endDate = today.toISOString().split('T')[0];
        console.log(endDate);
        console.log(req.body);
        const amount =  parseInt(req.body.price, 10);
        
        const method = req.body.paymentType;
        const username = req.session.passport.user;
        await db.promise().query("INSERT INTO payments (method, amount, planname, username) VALUES (?, ?, ?, ?)", [method, amount, planname, username]);
        await db.promise().query("INSERT INTO membership (start_date, end_date, username) VALUES (?, ?, ?)", [startDate, endDate, username]);
     
        res.render("home.ejs", { user: req.session.passport, success:true  });
    }
    catch(err){
        console.log("Error inserting")
    }
})
   
   

export default router;
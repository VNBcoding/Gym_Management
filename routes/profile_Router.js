import express from "express";


const router = express.Router();

router.get("/profile",(req,res)=> {
    res.render("profile.ejs",  { user: req.session.passport });
})

export default router
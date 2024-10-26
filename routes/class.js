import express from "express";

const router = express.Router();

router.get("/class",(req,res)=> {
    res.render("class.ejs");
})

export default router
import express from "express";
import db from "../config/db.js";

const router = express.Router();

// Membership page route
router.get("/membership", async (req, res) => {
    try {
        // Query to fetch membership plans from the `plan` table
        const [plans] = await db.promise().query("SELECT * FROM plan");
        res.render("membership.ejs", { plans , user: req.session.passport} );
    } catch (err) {
        console.error("Error fetching membership plans:", err);
        res.status(500).send("Error fetching membership plans");
    }
});

router.get('/membership/:planName', async (req, res) => {
    try {
        const planname = req.params.planName;
        const [plan] = await db.promise().query("SELECT * FROM plan WHERE plan_name = ? ", [planname]);
        res.render("payment.ejs", { plan : plan[0] , user: req.session.passport} );
        console.log(plan);
    }
    catch (err) {
        console.error("Error fetching membership plans:", err);
        res.status(500).send("Error fetching membership plans");
    }
}
)

export default router;
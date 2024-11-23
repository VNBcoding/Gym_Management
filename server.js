import express from "express";
import bodyParser from "body-parser";
import session from "express-session"
import passport from "./config/passport.js";
//import routes from the route folder
import homepage from "./routes/home_Router.js"
import aboutpage from "./routes/about_Router.js"
import classpage from "./routes/class_Router.js"
import loginpage from "./routes/login_Router.js"
import logoutpage from "./routes/logout_Router.js"
import signuppage from "./routes/signup_Router.js"
import membershippage from "./routes/membership_Router.js";
import contactUspage from "./routes/contactUs_Router.js";
import profilepage from "./routes/profile_Router.js";
import paymentpage from "./routes/payment_Router.js";

const app = express();
const port = 3000;
app.set('view engine', 'ejs');// Set EJS as the view engine

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use(express.static("public"))
app.use(express.json());

app.use(session({
    secret: "secret",
    resave: false,
    saveUnitialized: false,
    cookie: { secure: false }
}));

app.use(passport.initialize());
app.use(passport.session());
// Middleware to pass user data to every template
app.use((req, res, next) => {
    if (req.isAuthenticated() && req.user) {
    
    res.locals.user = req.session.passport ? req.session.passport.user : null;}
    else {
        // If not authenticated, set `res.locals.id` to an empty string
        res.locals.user = '';
    }
    next();
});


app.use("/", homepage);
app.use("/",aboutpage)
app.use("/",classpage)
app.use("/",loginpage)
app.use("/",logoutpage)
app.use("/",signuppage)
app.use("/",membershippage);
app.use("/",contactUspage);
app.use("/",profilepage);
app.use("/",paymentpage);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})
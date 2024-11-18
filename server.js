import express from "express";
import bodyParser from "body-parser";
//import routes from the route folder
import homepage from "./routes/home_Router.js"
import aboutpage from "./routes/about_Router.js"
import classpage from "./routes/class_Router.js"
import loginpage from "./routes/login_Router.js"
import signuppage from "./routes/signup_Router.js"
//app config
const app = express();
const port = 3000;
app.set('view engine', 'ejs');// Set EJS as the view engine

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use(express.static("public"))
app.use(express.json());

app.use("/", homepage);
app.use("/",aboutpage)
app.use("/",classpage)
app.use("/",loginpage)
app.use("/", signuppage)

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})
import express from "express";
import dotenv from 'dotenv';



//import routes from the route folder
import homepage from "./routes/home.js"
import aboutpage from "./routes/about.js"
import classpage from "./routes/class.js"
import loginpage from "./routes/login.js"
//app config
const app = express();
const port = 3000;
app.set('view engine', 'ejs');// Set EJS as the view engine

//middlewares
app.use(express.urlencoded({ extended: true })); 
app.use(express.static("public"))
app.use(express.json());

app.use("/", homepage);
app.use("/",aboutpage)
app.use("/",classpage)
app.use("/",loginpage)



app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})
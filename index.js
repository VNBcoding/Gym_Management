import express from "express";

//app config
const app = express();
const port = 3000;
app.set('view engine', 'ejs');// Set EJS as the view engine


//middlewares
app.use(express.urlencoded({ extended: true })); 
app.use(express.static("public"))
app.use(express.json());


app.get("/", (req,res) => {
    res.render("index.ejs");
})

app.get("/about",(req,res)=> {
    res.render("about.ejs");
})
app.get("/about",(req,res)=> {
    res.render("about.ejs");
})

app.get("/class", (req,res)=> {
    res.render("class.ejs")
})
app.get("/login",(req,res) => {
    res.render("login.ejs");
})
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})
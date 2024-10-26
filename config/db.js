import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config(); // Load .env file variables into process.env
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
})

db.connect((err) => {
    if(err){
        console.error("Error connecting");
        return;
    }
    console.log("Connected")
});


export default db;
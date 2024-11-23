import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import db from './db.js'; // Import your database connection
import bcrypt from 'bcrypt';

//LocalStrategy for authenticaltion, it will store the user_id in the session if successfully 
passport.use(new LocalStrategy(async function verify(username, password, callback){
        try{
            const inputPassword = password;
            console.log(inputPassword);
            const [rows] = await db.promise().query('SELECT * FROM users WHERE username = ?', [username]);
        
            // If rows contains any results
            if (rows.length > 0) {
                const hashedpassword = rows[0].u_password;
                bcrypt.compare(inputPassword, hashedpassword, function(err, result) {
                    if(result){
                        console.log("Login successfully");
                         // 'id' is passed to the next step for session handling
                        const user = { id: rows[0].u_ID, username: rows[0].username };

                        return callback(null, user);
                    }
                    else{
                        console.log("Login unsuccessfully")
                         // If the password doesn't match, call the callback with 'false'
                        return callback(null, false, { message: 'Invalid password' });
                    }
                });
                
            }
            else{ 
                console.log("There is wrong in the username/password ")
            }
        }
        catch(err){
            console.log(err);
        }
})
)
//Store user info
//"passport":{
// "user": user.username
//}
passport.serializeUser(function(user,cb){
    cb(null,user.username)
})
// retrieve user info
passport.deserializeUser(function(username, cb) {
    db.promise().query('SELECT * FROM users WHERE username = ?', [username])
        .then(([rows]) => {
            if (rows.length > 0) {
                cb(null, { id: rows[0].username });
            } else {
                cb(null, false);
            }
        })
        .catch(err => cb(err));
});
export default passport;
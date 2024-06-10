import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import bcrypt, { hash } from "bcrypt";

const app = express();
const port = 3000;
const saltRounds = 10;

const db = new pg.Client({
  host: 'localhost',
  port: 5432,
  database: 'auth',
  user: 'postgres',
  password: 'sarthak',
})

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  try{
    const result = await db.query("select * from level1_user where username = $1 " , [username]);
    if(result.rows.length > 0){
      console.log("username that you enter is alrady exist! please enter new username");
      res.render("register.ejs");
    }
    else{
      bcrypt.hash(password , saltRounds , async (err,hash) => {
        if(err){
          console.log("Error is " + err);
        }
        else{
          
            const check  = await db.query("insert into level1_user (username, password) values($1,$2)",[username,hash]);
            res.render("secrets.ejs");
      
        }
      })
      
    }
    
  }
  catch(err){
    console.log(err);
  }
  
});

app.post("/login", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  try{
    const check = await db.query("select * from level1_user where username = $1" , [username]);

    if(check.rows.length>0){
      const hash = check.rows[0].password;
      bcrypt.compare(password, hash, function(err, result) {
        if(result){
          res.render("secrets.ejs");
        }
        else{
          res.send("You Entered Incorrect Password");
        }
    });
    }
  }
  catch(err){
    console.log(err)
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

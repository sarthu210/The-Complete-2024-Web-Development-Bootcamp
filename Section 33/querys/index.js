import express from "express";
import pg from "pg";

const port = 3000;
const app = express();

const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "world",
    password: "sarthak",
    port: 5432
})

db.connect();

let data= [];

db.query("select wheat_production from world_food where wheat_production > 20" , (err,res)=>{
    if(err){
        console.log(err);
    }
    else{
        data = res.rows;
    }
    db.end();
})

app.get("/" , (req,res) => {
    console.log(data);
    res.json(data);
})

app.listen(port, ()=>{
    console.log(`app is listing in port ${port}`);
})
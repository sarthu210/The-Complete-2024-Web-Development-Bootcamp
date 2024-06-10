import express from "express";
const port = 3000;
const app = express();

app.get("/",(req,res)=>{
    res.send("<h1>Hello love</h1>");
});

app.get("/about",(req,res)=>{
    res.send("<h1>about</h1>");
});

app.get("/contact",(req,res)=>{
    res.send("<h1>contact</h1>");
});

app.post("/register" , (req,res)=>{
    res.sendStatus(201);
});

app.put("/user/angela" , (req,res)=>{
    res.sendStatus(200);
});

app.patch("/user/angela" , (req,res)=>{
    res.sendStatus(200);
});

app.listen(port , () => {
    console.log(`Server is running on port ${port}`);
});
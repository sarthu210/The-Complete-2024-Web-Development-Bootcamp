import express from "express";
import bodyParser from "body-parser";

const port = 3000;
const app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req,res)=>{
    const data = {
        title: "Entert Your First & Last Name Bellow"
    }
    res.render("index.ejs", data);
});

app.post("/submit" , (req,res)=>{
    const fName = req.body["fName"];
    const fLast = req.body["lName"];
    const lName = "Your Name Has Contain" + (fName.length + fLast.length) + "Letters";
    console.log(lName);

    const data = {
        length: lName
    };

    res.render("index.ejs" , data);
})

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})

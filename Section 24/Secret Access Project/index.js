import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const port = 3000;
const app = express();
const __dirName = dirname(fileURLToPath(import.meta.url));
var checkPassword = false;

app.use(bodyParser.urlencoded({extended: true}));

function passwordChecker(req,res,next){
    const pasWord = req.body["password"];
    if(pasWord === "sarthak")
    {
        checkPassword = true;
    }
    next();
}

app.use(passwordChecker);

app.get("/", (req,res) => {
    res.sendFile(__dirName + "/index.html");
});

app.post("/check" , (req,res) => {
    if(checkPassword)
    {
        res.sendFile(__dirName + "/secrete.html");
    }
    else
    {
        res.sendFile(__dirName + "/index.html");
    }
});

app.listen(port , ()=> {
    console.log(`Server is running on port ${port}`);
})
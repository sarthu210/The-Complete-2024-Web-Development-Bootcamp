import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import  bodyParser  from "body-parser";

const app = express();
const port = 3000;
const __dirName = dirname(fileURLToPath(import.meta.url));

var Name= "";
var Email = "";
var userAutjo = false;

app.use(bodyParser.urlencoded({extended: true}));

function nameEamilTaker(req,res,next){
    Name = req.body["name"] ;
    Email = req.body["email"];
    if(Name=="Sarthak" && Email=="sarthaknande19@gmail.com"){
        userAutjo = true;
    }
    else{
        userAutjo = false;
    }
    next();
}

app.use(nameEamilTaker);

app.get("/" , (req,res) => {
    res.sendFile(__dirName + "/inedx.html");
});

app.post("/register" , (req,res,next)=>{
   if(userAutjo){
    res.sendFile(__dirName+"/secrete.html");
   }
   else{
    res.sendFile(__dirName + "/inedx.html");
   }
    
})

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});

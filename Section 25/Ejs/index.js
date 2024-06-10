import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const port = 3000;
const app = express();
const __dirName = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({extended: true}));

// app.get("/" , (req,res) => {

//     const today = new Date();
//     const day = today.getDay();

//     let a = "its working days";
//     let b = "just relax";

//     if(day===0 || day===6){
//         a = "its weekned";
//         b = ", dont relax";
//     }

//     res.render("index.ejs", {
//         dayName: a,
//         message: b
//     });
// });

app.get("/" , (req,res) => {
    const data = {
        title: "Ejs Tags",
        itemList: ["Apple","Orange","Banana"],
        sec: new Date().getSeconds(),
        htmlc: "<em>This is em tag</em>",
        empty: "<p>list is empty</p>"
    };

    res.render("index.ejs" , data);
    
});


app.listen(port , async()=> {
    console.log(`App is runnig on ${port}`);
})
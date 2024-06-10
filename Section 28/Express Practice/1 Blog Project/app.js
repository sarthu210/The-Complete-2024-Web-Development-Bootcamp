import express from "express";
import bodyParser from "body-parser";
import _ from "lodash";

const app = express();
const port = 3000;
var posts = [];

app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/" , (req,res)=>{
    res.render("index.ejs", {posts: posts});
})

app.get("/compose" , (req,res) => {
    res.render("compose.ejs");
})

app.post("/upload" , (req,res) => {
    var post = {
        title: req.body.title,
        content: req.body.content
    }
    posts.push(post);
    res.redirect("/");
    console.log(post);
})

app.get("/posts/:postName" , (req,res) => {

    const takePostName = _.lowerCase(req.params.postName);

    posts.forEach(function(post){
        const takeTitle = _.lowerCase(post.title);
        if(takePostName === takeTitle){
            res.render("post.ejs" , {
                title: post.title,
                content: post.content
            })
        }
    })
    
})



app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
})
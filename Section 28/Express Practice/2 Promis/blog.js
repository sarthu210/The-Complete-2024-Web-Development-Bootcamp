import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

var blogPosts = [
    {
        id:1,
        title: "new post"
    },
    {
        id:2,
        title: "second Post"
    }
]

let lastIndex = blogPosts.length;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/" , (req,res) => {
    res.json(blogPosts);
})

app.get("/post/:id" , (req,res) => {
    const id = req.params.id;
    const findPost = blogPosts.find((post) => post.id == id);
    console.log(findPost);
    res.json(findPost);
});

app.post("/post" , (req,res) => {
    const newId = lastIndex - 1 ;
    const data = {
        id: newId,
        title: req.body.title
    }
    blogPosts.push(data);
    console.log(blogPosts[newId]);
});

app.patch("/post/:id" , (req,res) => {
    const id = req.params.id;
    const findPost = blogPosts.find((post) => post.id == id);
    
})

app.post("/create", (req,res) => {
    
})

app.listen(port, () => {
    console.log(`Blog is listning on ${port}`);
})
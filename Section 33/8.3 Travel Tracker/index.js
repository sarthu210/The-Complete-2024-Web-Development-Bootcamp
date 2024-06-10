import express from "express";
import bodyParser from "body-parser";
import getData from "./vmc/getData.js";
import addVisitedCountry from "./vmc/addVisitedCountry.js"

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


app.get("/",  async (req, res) => {
  try{
    let countries = [];
  await getData(countries);
  console.log(countries);
  res.render("index.ejs" , {
       countries: countries,
       total: countries.length
      })
  }
  catch{
    console.log(Error.messages);
  }
  
});

app.post("/add" , async(req,res) => {
  try{
      const input = req.body["country"];
      await addVisitedCountry(input);
      res.redirect("/")
  }
  catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error");
  }

})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

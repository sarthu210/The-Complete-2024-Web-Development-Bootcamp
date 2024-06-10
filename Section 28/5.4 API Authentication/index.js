import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "sarthak";
const yourPassword = "pass123";
const yourAPIKey = "be19c498-517d-49d1-8f80-ddba96e93517";
const yourBearerToken = "b57c3fe8-baba-4a52-9883-e101c2893e63";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  try{
    const response = await axios.get(API_URL+ "/random");
    const result = response.data;
    res.render("index.ejs" , {
      content: JSON.stringify(result),
    })
  }
  catch(error){
    res.status(404).send(error.message);
  }
});

app.get("/basicAuth", async (req, res) => {
  try{
    const response = await axios.get(API_URL + "/all?page=1" , {
      auth: {
        username: yourUsername,
        password: yourPassword
      }
    });
    const result = response.data;
    res.render("index.ejs" , {
      content: JSON.stringify(result)
    });
  }
  catch(error){
    res.status(400).send(error.message);
  }
});

app.get("/apiKey", async (req, res) => {
  try{
    const response = await axios.get(API_URL + "/filter" ,{
      params: {
        score: 5,
        apiKey: yourAPIKey
      }
    });
    res.render("index.ejs" , {
      content: JSON.stringify(response.data)
    });
  }
  catch(error){
    res.status(404).send(error.message)
  }
});

app.get("/bearerToken", async (req, res) => {
  try{
    const response = await axios.get(API_URL + "/secrets/1" , {
      headers: {
        Authorization : `Bearer ${yourBearerToken}`
      }
    });
    console.log(response.data);
    res.render("index.ejs", {
      content: response.data
    });
  }
  catch(error){
    res.status(404).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

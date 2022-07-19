import express from "express";
import mongoose from "mongoose";
import Cards from "./Cards.js";
import cors from "cors";
//App config
const app = express();
const port = process.env.PORT || 5000;
const connection_url =
  "mongodb+srv://Osama:MernStack123@cluster0.o9muu.mongodb.net/project1?retryWrites=true&w=majority";

//Middleware
app.use(express.json());
app.use(cors());
//Database
mongoose.connect(connection_url);

//API endpoints
app.get("/", (req, res) => res.status(200).send("Hello Jigger!"));
app.post("/cards/memes", (req, res) => {
  const dbMeme = req.body;
  Cards.create(dbMeme, (err, data) => {
    err ? res.status(500).send("Server Error!") : res.status(201).send(data);
  });
});
app.get("/cards/memes", (req, res) => {
  Cards.find((err, data) => {
    err ? res.status(500).send("Server Error!") : res.status(200).send(data);
  });
});
//App Listener

app.listen(port, () => console.log("Listening on Port : " + port));

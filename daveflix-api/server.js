const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/daveflix")
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.error("MongoDB Connection Error:", err);
  });

app.listen(5000, console.log("server started"));

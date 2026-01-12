// const express = require("express")  -- this is the common version to initialze the express
import express from "express";
import path from "path";
import { ENV } from "./lib/env.js";

const app = express();

const __dirname = path.resolve();

app.get("/health", (req, res) => {
  res.status(200).json({ msg: "Success from the API from the backend part" });
});
app.get("/books", (req, res) => {
  res.status(200).json({ msg: "This is the books API from the backend part" });
});



//  Make our APP ready for Deployment
if (ENV.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("/{*any}", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

// app.listen(3000, ()=> console.log("Server is running on the port 3000", ENV.PORT));

app.listen(ENV.PORT, () =>
    // console.log("Server is running on the port 3000", ENV.PORT)
console.log(`Server is running on port ${ENV.PORT}`)
);

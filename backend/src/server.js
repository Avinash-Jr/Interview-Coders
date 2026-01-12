// const express = require("express")  -- this is the common version to initialze the express
import express, { response } from "express";
import {ENV} from "./lib/env.js";

const app = express();

console.log(ENV.PORT);
console.log(ENV.DB_URL);


app.get("/", (request, response) => {
    response.status(200).json({msg :"Success from the API from the backend part"});
});
app.listen(3000, ()=> console.log("Server is running on the port 3000", ENV.PORT));
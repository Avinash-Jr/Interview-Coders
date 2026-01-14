// const express = require("express")  -- this is the common version to initialze the express
import express from "express";
import path from "path";
import cors from "cors";
import serve from "inngest/express";


import { ENV } from "./lib/env.js";
import { connectDB } from "./lib/db.js";
import { inngest ,functions } from "./lib/inngest.js";

const app = express();

const __dirname = path.resolve();

// middleware 
app.use(express.json())
// credentials: true ---> meaning server allows a browser to send cookies on requests to the server
// origin : true ---> meaning server allows requests from the specified origin
app.use(cors({origin:ENV.CLIENT_URL, credentials:true}))

app.use("/api/inngest", serve({client: inngest, functions}));

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

    const startServer = async () => {
        try { 
        await connectDB();
        app.listen(ENV.PORT, () => console.log("Server is running on the port: ", ENV.PORT));
        } catch (error) {
            console.error("Failed to start server:", error);
            process.exit(1);
        }
    };
    startServer();


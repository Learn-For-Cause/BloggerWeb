// Imports ====================================================

import express, { json } from "express";
import cors from "cors";
import MongoConnect from "./utils/db.js";
import dotenv from "dotenv";
dotenv.config();

// MongoDB Connection =========================================

MongoConnect();

// Setting ====================================================

const app = express();
app.use(cors());
app.use(json());

// Routes Import ==============================================

import AddUser from "./routes/Register.js";
import LoginUser from "./routes/Login.js";

// Main =======================================================

app.post("/addUser", AddUser);
app.post("/authUser", LoginUser);


// Server =====================================================
app.get("/", (req, res) => {
    res.send("If You See This: Ur server Works 🎉");
})

app.listen(process.env.PORT || 7070, () => {
    console.log("Server Running:  ✔");
});
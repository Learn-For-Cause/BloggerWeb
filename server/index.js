// Imports ====================================================
import express, { json } from "express";
import cors from "cors";
import MongoConnect from "./utils/db.js";
import dotenv from "dotenv";

// MongoDB Connection =========================================
dotenv.config();
MongoConnect();

// Setting ====================================================
const app = express();
app.use(cors());
app.use(json());

// Routes Import ==============================================
import Register from "./routes/auth/Register.js";
import Login from "./routes/auth/Login.js";

// Main =======================================================
app.post("/register", Register);
app.post("/login", Login);

// Server =====================================================
app.get("/", (req, res) => {
  res.send("If You See This: Ur server Works 🎉");
});

app.listen(process.env.PORT || 7070, () => {
  console.log("Server Running:  ✔");
});

import express from "express";
import Connection from "./database/db.js";
import router from "./routes/api.js";
import cors from "cors";
import path from "path";
import dotenv from "dotenv";
// Importing necessary modules
// express for creating the server


const app = express();
dotenv.config(); // Load environment variables from .env file

const PORT = process.env.PORT; // Set the port to listen on, defaulting to 8000 if not specified
app.use(cors());
app.use('/',router);

const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, '/frontend/dist')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/frontend/dist/index.html'));
});

app.listen(PORT , () => 
    console.log("server is running on port" , PORT)
);

Connection();
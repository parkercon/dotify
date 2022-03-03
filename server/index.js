// import express
import express from "express";
// import cors
import cors from "cors";

import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);

// 👇️ "/home/john/Desktop/javascript"
const __dirname = path.dirname(__filename);

// import routes
import Router from "./routes/api/routes.js";

import dotenv from 'dotenv'
dotenv.config()

// init express
const app = express();
// use express json
app.use(express.json());
// use cors
app.use(cors());
// use router
app.use(Router);

const port = process.env.PORT || 12345;

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(__dirname + "/public/"))
  app.get("*", (req, res) => {
    res.sendFile(__dirname, "/public/index.html")
  })
}

app.listen(port, () => console.log(`Server running at ${port}`));
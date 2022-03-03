// import express
import express from "express";
// import cors
import cors from "cors";

import path from 'path';

import db from "./config/database.js";
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

function handleDisconnect() {
  db.connect(function(err) {              // The server is either down
    if(err) {                                     // or restarting (takes a while sometimes).
      console.log('error when connecting to db:', err);
      setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
    }                                     // to avoid a hot loop, and to allow our node script to
  }); 
  db.on('error', function(err) {
    console.log('db error', err);
    if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
      handleDisconnect();                         // lost due to either server restart, or a
    } else {                                      // connnection idle timeout (the wait_timeout
      throw err;                                  // server variable configures this)
    }
  });
}

const port = process.env.PORT || 12345;

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(__dirname + "/public/"))
  app.get("*", (req, res) => {
    res.sendFile(__dirname, "/public/index.html")
  })
}

handleDisconnect();

app.listen(port, () => console.log(`Server running at ${port}`));
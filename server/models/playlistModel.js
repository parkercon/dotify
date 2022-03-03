import db from "../config/database.js"

// Get All Songs
export const getSongs = (result) => {
  db.query("SELECT * FROM songs", (err, results) => {             
      if(err) {
          console.log(err);
          result(err, null);
      } else {
          result(null, results);
      }
  });   
}
import db from "../config/database.js"

// Get All Artists
export const getArtists = (result) => {
  db.query("SELECT * FROM artists", (err, results) => {             
      if(err) {
          console.log(err);
          result(err, null);
      } else {
          result(null, results);
      }
  });   
}
import db from "../config/database.js"

// Get All Playlists
export const getSongs = (result) => {
  db.query("SELECT * FROM playlists", (err, results) => {             
      if(err) {
          console.log(err);
          result(err, null);
      } else {
          result(null, results);
      }
  });   
}
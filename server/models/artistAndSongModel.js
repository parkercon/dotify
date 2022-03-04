import { db, db_config, pool } from "../config/database.js"

// Get All Artists
export const getArtistsAndSongs = (result) => {
  pool.query("SELECT * FROM artistSongs", (err, results) => {             
      if(err) {
          console.log(err);
          // handleDisconnect()
          result(err, null);
      } else {
          result(null, results);
      }
  });   
}
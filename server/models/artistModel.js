import { db, db_config, pool } from "../config/database.js"

// Get All Artists
export const getArtists = (result) => {
  pool.query("SELECT * FROM artists", (err, results) => {             
      if(err) {
          console.log(err);
          // handleDisconnect()
          result(err, null);
      } else {
          result(null, results);
      }
  });   
}

export const insertArtist = (data, result) => {
    pool.query("INSERT INTO artists SET ?", [data], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

export const deleteArtistById = (data, result) => {
    pool.query("DELETE FROM artists WHERE artistId = ?", [data], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}
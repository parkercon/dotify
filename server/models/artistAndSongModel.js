import { db, db_config, pool } from "../config/database.js"

// Get All Artists
export const getArtistsAndSongs = (result) => {
  pool.query("SELECT * FROM artistSongs", (err, results) => {             
      if(err) {
          console.log(err);
          result(err, null);
      } else {
          result(null, results);
      }
  });   
}

export const insertArtistAndSong = (data, result) => {
    pool.query("INSERT INTO artistSongs SET ?", [data], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

export const deleteArtistAndSongById = (data, result) => {
    pool.query("DELETE FROM artistSongs WHERE artistId = ? AND songId = ?", [data.artistId, data.songId], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}
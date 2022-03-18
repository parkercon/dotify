import { db, db_config, pool } from "../config/database.js"

// Get All Artists
export const getPlaylistsAndSongs = (result) => {
  pool.query("SELECT * FROM playlistSongs", (err, results) => {             
      if(err) {
          console.log(err);
          // handleDisconnect()
          result(err, null);
      } else {
          result(null, results);
      }
  });   
}

export const getByPlaylistId = (id, result) => {
    pool.query("SELECT * FROM playlistSongs WHERE playlistId = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            console.log('results:', results)
            result(null, results);
        }
    });   
}

export const insertPlaylistAndSong = (data, result) => {
    pool.query("INSERT INTO playlistSongs SET ?", [data], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

export const deletePlaylistAndSongById = (data, result) => {
    pool.query("DELETE FROM playlistSongs WHERE playlistId = ? AND songId = ?", [data.playlistId, data.songId], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}
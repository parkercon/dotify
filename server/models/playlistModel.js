import { db, db_config, pool } from "../config/database.js"

// Get All Playlists
export const getPlaylists = (result) => {
  pool.query("SELECT * FROM playlists", (err, results) => {             
      if(err) {
          console.log(err);
          // handleDisconnect()
          result(err, null);
      } else {
          result(null, results);
      }
  });   
}

export const getPlaylistsByName = (name, result) => {
    pool.query("SELECT * FROM playlists WHERE playlistName = ?", [name], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            console.log('results:', results)
            result(null, results);
        }
    });   
}

export const insertPlaylist = (data, result) => {
    pool.query("INSERT INTO playlists SET ?", [data], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

export const updatePlaylistById = (data, id, result) => {
    pool.query("UPDATE playlists SET playlistName = ?, userId = ?, playlistDate = ? WHERE playlistId = ?", [data.playlistName, data.userId, data.playlistDate, id], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}
export const deletePlaylistById = (data, result) => {
    pool.query("DELETE FROM playlists WHERE playlistId = ?", [data], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}
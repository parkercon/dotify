import { db, db_config, pool } from "../config/database.js"

// Get All Songs
export const getSongs = (result) => {
    pool.query("SELECT * FROM songs", (err, results) => {
        if (err) {
            console.log('error in songs:', err);
            //   handleDisconnect()
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

// Insert a Song
export const insertSong = (data, result) => {
    pool.query("INSERT INTO songs SET ?", [data], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

export const updateSongById = (data, id, result) => {
    pool.query("UPDATE songs SET songName = ?, songDate = ? WHERE songId = ?", [data.songName, data.songDate, id], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

export const deleteSongById = (data, result) => {
    pool.query("DELETE FROM songs WHERE songId = ?", [data], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}
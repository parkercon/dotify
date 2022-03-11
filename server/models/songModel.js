import { db, db_config, pool } from "../config/database.js"

// function handleDisconnect() {
//     db = mysql.createConnection(db_config); // Recreate the connection, since
//                                                     // the old one cannot be reused.
//     db.connect(function(err) {              // The server is either down
//       if(err) {                                     // or restarting (takes a while sometimes).
//         console.log('error when connecting to db:', err);
//         setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
//       }                                     // to avoid a hot loop, and to allow our node script to
//     });
// }        

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
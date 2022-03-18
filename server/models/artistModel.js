import { db, db_config, pool } from "../config/database.js"

// Get All Artists
export const getArtists = (result) => {
    pool.query("SELECT * FROM artists", (err, results) => {
        if (err) {
            console.log(err);
            // handleDisconnect()
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

export const getArtistByName = (name, result) => {
    pool.query("SELECT * FROM artists WHERE artistName = ?", [name], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            console.log('results:', results)
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

export const updateArtistById = (data, id, result) => {
    pool.query("UPDATE artists SET artistName = ? WHERE artistId = ?", [data.artistName, id], (err, results) => {
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
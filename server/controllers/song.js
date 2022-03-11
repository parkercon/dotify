import { getSongs, insertSong, updateSongById, deleteSongById } from '../models/songModel.js'

export const showSongs = (req, res) => {
    getSongs((err, results) => {
        if (err) {
            res.send(err);
        } else {
            console.log('results: ', results)
            res.json(results);
        }
    });
}

export const createSong = (req, res) => {
    const data = req.body;
    insertSong(data, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
}

export const updateSong = (req, res) => {
    const data = req.body;
    const id = req.params.id;
    updateSongById(data, id, (err, results) => {
export const deleteSong = (req, res) => {
    const id = req.params.id;
    deleteSongById(id, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
}
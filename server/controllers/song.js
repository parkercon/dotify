import { getSongs, insertSong } from '../models/songModel.js'

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
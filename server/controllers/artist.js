import { getArtists, insertArtist, updateArtistById, deleteArtistById } from '../models/artistModel.js'

export const showArtists = (req, res) => {
    getArtists((err, results) => {
        if (err) {
            res.send(err);
        } else {
            console.log('results: ', results)
            res.json(results);
        }
    });
}

export const createArtist = (req, res) => {
    const data = req.body;
    insertArtist(data, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
}

export const updateArtist = (req, res) => {
    const data = req.body;
    const id = req.params.id;
    updateArtistById(data, id, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
}

export const deleteArtist = (req, res) => {
    const id = req.params.id;
    deleteArtistById(id, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
}
import { getArtistsAndSongs, insertArtistAndSong, deleteArtistAndSongById, getByArtistId } from '../models/artistAndSongModel.js'

export const showArtistsAndSongs = (req, res) => {
  getArtistsAndSongs((err, results) => {
      if (err){
          res.send(err);
      }else{
          console.log('results: ', results)
          res.json(results);
      }
  });
}

export const showByArtistId = (req, res) => {
    console.log('req:', req.params)
    getByArtistId(req.params.artistId, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

export const createArtistAndSong = (req, res) => {
    const data = req.body;
    insertArtistAndSong(data, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
}

export const deleteArtistAndSong = (req, res) => {
    const id = {
        artistId: req.params.artistId,
        songId: req.params.songId
    }
    deleteArtistAndSongById(id, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
}
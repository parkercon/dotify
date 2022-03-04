import { getArtistsAndSongs, insertArtistAndSong } from '../models/artistAndSongModel.js'

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
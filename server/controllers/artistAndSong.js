import { getArtistsAndSongs } from '../models/artistAndSongModel.js'

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
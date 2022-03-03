import { getPlaylists } from '../models/playlistModel.js'

export const showPlaylists = (req, res) => {
  getPlaylists((err, results) => {
      if (err){
          res.send(err);
      }else{
          console.log('results: ', results)
          res.json(results);
      }
  });
}
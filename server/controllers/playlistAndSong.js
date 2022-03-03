import { getPlaylistsAndSongs } from '../models/playlistAndSongModel.js'

export const showPlaylistsAndSongs = (req, res) => {
  getPlaylistsAndSongs((err, results) => {
      if (err){
          res.send(err);
      }else{
          console.log('results: ', results)
          res.json(results);
      }
  });
}
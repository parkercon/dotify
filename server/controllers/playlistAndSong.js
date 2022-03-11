import { getPlaylistsAndSongs, insertPlaylistAndSong, deletePlaylistAndSongById } from '../models/playlistAndSongModel.js'

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

export const createPlaylistAndSong = (req, res) => {
    const data = req.body;
    insertPlaylistAndSong(data, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
}

export const deletePlaylistAndSong = (req, res) => {
    const id = {
        playlistId: req.params.playlistId,
        songId: req.params.songId
    }
    deletePlaylistAndSongById(id, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
}
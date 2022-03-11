import { getPlaylists, insertPlaylist, updatePlaylistById, deletePlaylistById } from '../models/playlistModel.js'

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

export const createPlaylist = (req, res) => {
    const data = req.body;
    insertPlaylist(data, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
}

export const deletePlaylist = (req, res) => {
    const id = req.params.id;
    deletePlaylistById(id, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
}

export const updatePlaylist = (req, res) => {
    const data = req.body;
    const id = req.params.id;
    updatePlaylistById(data, id, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
}
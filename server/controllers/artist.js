import { getArtists, insertArtist } from '../models/artistModel.js'

export const showArtists = (req, res) => {
  getArtists((err, results) => {
      if (err){
          res.send(err);
      }else{
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
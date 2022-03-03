import { getArtists } from '../models/artistModel.js'

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
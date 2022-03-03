import { getSongs } from '../models/songModel.js'

export const showSongs = (req, res) => {
  getSongs((err, results) => {
      if (err){
          res.send(err);
      }else{
          console.log('results: ', results)
          res.json(results);
      }
  });
}
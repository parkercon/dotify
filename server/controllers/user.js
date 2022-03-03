import { getUsers } from '../models/userModel.js'

export const showUsers = (req, res) => {
  getUsers((err, results) => {
      if (err){
          res.send(err);
      }else{
          console.log('results: ', results)
          res.json(results);
      }
  });
}
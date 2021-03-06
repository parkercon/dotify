import { getUsers, insertUser, updateUserById, deleteUserById, getUserByEmail } from '../models/userModel.js'

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
 
export const showUserByEmail = (req, res) => {
    console.log('req:', req.params)
    getUserByEmail(req.params.userEmail, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 

export const createUser = (req, res) => {
    const data = req.body;
    insertUser(data, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
}

export const updateUser = (req, res) => {
    const data = req.body;
    const id = req.params.id;
    updateUserById(data, id, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
}

export const deleteUser = (req, res) => {
    const id = req.params.id
    deleteUserById(id, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
}
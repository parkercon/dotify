import { db, db_config, pool } from "../config/database.js"

// Get All Users
export const getUsers = (result) => {
  pool.query("SELECT * FROM users", (err, results) => {             
      if(err) {
          console.log(err);
          // handleDisconnect()
          result(err, null);
      } else {
          result(null, results);
      }
  });   
}

export const insertUser = (data, result) => {
    pool.query("INSERT INTO users SET ?", [data], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}
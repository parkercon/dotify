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

export const getUserByEmail = (email, result) => {
    pool.query("SELECT * FROM users WHERE userEmail = ?", [email], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            console.log('results:', results)
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

export const updateUserById = (data, id, result) => {
    pool.query("UPDATE users SET userPassword = ?, userfName = ?, userlName = ?, userBirthday = ?, userEmail = ? WHERE userId = ?", [data.userPassword, data.userfName, data.userlName, data.userBirthday, data.userEmail, id], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

export const deleteUserById = (data, result) => {
    pool.query("DELETE FROM users WHERE userid = ?", [data], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}
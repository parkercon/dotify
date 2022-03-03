import mysql from "mysql2";
import dotenv from 'dotenv'
dotenv.config()
var db = mysql.createConnection({
  host            : process.env.SQLHOST,
  user            : process.env.SQLUSER,
  password        : process.env.PASS,
  database        : process.env.DB
});
export default db;

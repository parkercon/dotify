import mysql from "mysql2";
import dotenv from 'dotenv'
dotenv.config()

var db_config = {
  host            : process.env.SQLHOST,
  user            : process.env.SQLUSER,
  password        : process.env.PASS,
  database        : process.env.DB
}

var db = mysql.createConnection(db_config);
export var db;
export var db_config;

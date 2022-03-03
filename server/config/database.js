import mysql from "mysql2";
import dotenv from 'dotenv'
dotenv.config()

var db_config = {
  host            : process.env.SQLHOST,
  user            : process.env.SQLUSER,
  password        : process.env.PASS,
  database        : process.env.DB
}

let pool = mysql.createPool(db_config);
pool.on('connection', function (_conn) {
  if (_conn) {
      logger.info('Connected the database via threadId %d!!', _conn.threadId);
      _conn.query('SET SESSION auto_increment_increment=1');
  }
});

var db = mysql.createConnection(db_config);
export var db;
export var db_config;

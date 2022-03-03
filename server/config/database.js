import mysql from "mysql2";
import dotenv from 'dotenv'
dotenv.config()

export var db_config = {
  host            : process.env.SQLHOST,
  user            : process.env.SQLUSER,
  password        : process.env.PASS,
  database        : process.env.DB
}

export let pool = mysql.createPool(db_config);
pool.on('connection', function (_conn) {
  if (_conn) {
      _conn.query('SET SESSION auto_increment_increment=1');
  }
});

export var db = 'mysql.createConnection(db_config);'

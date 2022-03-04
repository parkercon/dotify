import { db, db_config} from "../config/database.js"

function handleDisconnect() {
    db = mysql.createConnection(db_config); // Recreate the connection, since
                                                    // the old one cannot be reused.
    db.connect(function(err) {              // The server is either down
      if(err) {                                     // or restarting (takes a while sometimes).
        console.log('error when connecting to db:', err);
        setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
      }                                     // to avoid a hot loop, and to allow our node script to
    });
}   

// Get All Artists
export const getArtistsAndSongs = (result) => {
  db.query("SELECT * FROM artistsongs", (err, results) => {             
      if(err) {
          console.log(err);
          handleDisconnect()
          result(err, null);
      } else {
          result(null, results);
      }
  });   
}
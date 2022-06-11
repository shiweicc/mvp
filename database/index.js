const mysql = require('mysql');

const db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'recipes'
});

db.connect(function(err) {
  if (err) {
    console.log('error connect DB!', err);
  } else {
    console.log('success connect DB!');
  }
});

module.exports = db;
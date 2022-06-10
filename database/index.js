const mysql      = require('mysql');

const db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'recipes'
});

db.connect(function(err) {
  // connected! (unless `err` is set)
  if (err) {
    console.log('error connect DB!', err);
  } else {
    console.log('success connect DB!');
  }
});

// var post  = {id: 1, title: 'Hello MySQL'};
// var query = db.query('INSERT INTO categories VALUES ?', post, function(err, result) {
//   // Neat!
// });

// console.log(query.sql); // INSERT INTO posts SET `id` = 1, `title` = 'Hello MySQL'


module.exports = db;
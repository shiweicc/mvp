const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const getCategoryAPI = require('../helpers/apiRequest.js');
const db = require('../database/index.js');

const port = 3000;
const DIST_DIR = path.join(__dirname, '../dist');
const HTML_FILE = path.join(DIST_DIR, 'index.html');

app.use(express.static(DIST_DIR));
// app.use(express.json());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  res.status(200).send('Hello World from the server!');
});

app.get('/category', (req, res) => {
  getCategoryAPI((data) => {
    console.log('server get data back from API: ', data);

    let resultArr = [];

    data.meals.forEach(item => {
      let eachCategory = item.strCategory;
      let categoryQuery = "INSERT INTO categories (category_name) VALUES ('" + eachCategory + "');";

      db.query(categoryQuery, (err, result) => {
        if (err) {
          console.log('error create data in DB!', err);
          res.send('error create data in DB!');
        } else {
          console.log('success create data in DB!');
          console.log('result: ', result);
        }
      })
    })
    res.send(data);
  })
});

app.post('/search', (req, res) => {

});

app.listen(port, () => {
  console.log('App listening on port: ' + port);
});
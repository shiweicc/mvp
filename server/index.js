const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const getRecipesAPI = require('../helpers/apiRequest.js');

const port = 3000;
const DIST_DIR = path.join(__dirname, '../dist');
const HTML_FILE = path.join(DIST_DIR, 'index.html');

app.use(express.static(DIST_DIR));
// app.use(express.json());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  res.status(200).send('Hello World from the server!');
})

app.get('/recipes', (req, res) => {
  getRecipesAPI((data) => {
    console.log('server get data back from API: ', data);
    res.send(data);
  })
})

app.listen(port, () => {
  console.log('App listening on port: ' + port);
});
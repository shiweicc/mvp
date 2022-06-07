const express = require('express');
const path = require('path');
const app = express();

const port = 3000;
const DIST_DIR = path.join(__dirname, '../dist');
const HTML_FILE = path.join(DIST_DIR, 'index.html');

app.use(express.static(DIST_DIR));

app.get('/', function (req, res) {
  res.status(200).send('Hello World from the server!');
})

app.listen(port, () => {
  console.log('App listening on port: ' + port);
});
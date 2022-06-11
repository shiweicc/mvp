const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const { getCategoryAPI, getMealByName, getIngredient }  = require('../helpers/apiRequest.js');
const db = require('../database/index.js');

const port = 3000;
const DIST_DIR = path.join(__dirname, '../dist');
const HTML_FILE = path.join(DIST_DIR, 'index.html');

app.use(express.static(DIST_DIR));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  res.status(200).send('Hello World from the server!');
});

app.get('/category', (req, res) => {
  getCategoryAPI((data) => {
    console.log('server get data back from API: ', data);

    data.meals.forEach(item => {
      let eachCategory = item.strCategory;
      let categoryQuery = "INSERT INTO categories (category_name) VALUES ('" + eachCategory + "');";

      db.query(categoryQuery, (err, result) => {
        if (err) {
          console.log('error create data in DB!', err);
          res.send('error create data in DB!');
        } else {
          console.log('success create category data in DB!');
        }
      })
    })
    res.send(data);
  })
});

app.post('/search', (req, res) => {
  let searchName = Object.keys(req.body)[0];

  getMealByName(searchName)
  .then((result => {
    console.log('success get meals by name');
    // console.log('data get from mealAPI: ', result.data.meals); // arr of objects
    let mealsArr = result.data.meals;

    mealsArr.forEach(item => {
      let name = item.strMeal;
      // let instruction = '"' + item.strInstructions + '"';
      // console.log('!!!!here: ', instruction);
      let category = item.strCategory;
      let youtube = item.strYoutube;
      let ingredients = getIngredient(item);

      // let mealsQuery = "INSERT INTO meals (meal_name, instructions, category, youtube, ingredients) VALUES (name, instruction, category, youtube, ingredients);
      // let mealsQuery = "INSERT INTO meals (meal_name, instructions, category, youtube, ingredients) VALUES ('" + name + "','" + instruction + "','" + category + "','" + youtube + "','" + ingredients + "');";

      let mealsQuery = `INSERT INTO meals (meal_name, category, youtube, ingredients) VALUES ('` + name + `','` + category + `','` + youtube + `','` + ingredients + `');`;

      db.query(mealsQuery, (err, result) => {
        if (err) {
          console.log('error create meal data in DB!', err);
        } else {
          console.log('success create meal data in DB!');
        }
      })
    })

    res.json(mealsArr);
  }))
  .catch((err) => {
    console.log('error get meals by name');
    res.send('error get meals by name');
  })

});

app.listen(port, () => {
  console.log('App listening on port: ' + port);
});
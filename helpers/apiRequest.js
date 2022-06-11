const axios = require('axios');

const getCategoryAPI = (cb) => {
  axios.get('http://www.themealdb.com/api/json/v1/1/list.php?c=list')
  .then(res => {
    console.log('success get category data from API!');
    cb(res.data);
  })
  .catch(err => {
    console.log('fail getting category data from API: ', err);
    cb(err);
  })
}

const getMealByName = (searchName) => {
  let searchRoute = 'http://www.themealdb.com/api/json/v1/1/search.php?s=' + searchName;
  return axios.get(searchRoute)
}

const getIngredient = (mealObj) => {
  const ingredientKey = 'strIngredient';
  const measureKey = 'strMeasure';
  let result = '';

  for (let i = 1; i < 21; i++) {
    let strIng = ingredientKey + i.toString();
    let strMea = measureKey + i.toString();

    if (mealObj[strIng] !== '' && mealObj[strMea] !== '') {
      result += mealObj[strIng] + '( ' + mealObj[strMea] + ' ), ';

    }
  }
  result = result.slice(0, -2);
  return result;
}



exports.getCategoryAPI = getCategoryAPI;
exports.getMealByName = getMealByName;
exports.getIngredient = getIngredient;

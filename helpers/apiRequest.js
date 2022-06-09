const axios = require('axios');

const getRecipesAPI = (cb) => {
  axios.get('http://www.themealdb.com/api/json/v1/1/list.php?c=list')
  .then(res => {
    console.log('get data from API: ', res.data);
    cb(res.data);
  })
  .catch(err => {
    console.log('fail getting data from API: ', err);
    cb(err);
  })
}

module.exports = getRecipesAPI;
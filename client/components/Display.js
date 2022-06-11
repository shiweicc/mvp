import React from 'react';
import getIngredient from '../../helpers/apiRequest.js';

const Display = (props) => {

  let meal = props.clickMeal;
  if (meal !== undefined) {

    let name = meal.strMeal;
    let category = meal.strCategory;
    let instruction = meal.strInstructions;
    let youtube = meal.strYoutube;

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

    let ingredients = getIngredient(meal);

    let handleYoutube = (e) => {
      let clickedLink = e.target.innerText;
      window.open(clickedLink);
    }

    return (
      <div>
        <h3>Your recipe: </h3>
        <p>{name}</p>
        <p>{category}</p>
        <p>{ingredients}</p>
        <p>{instruction}</p>
        <p onClick={(e)=> {handleYoutube(e)}}>{youtube}</p>
      </div>
    );
  }
};

export default Display;


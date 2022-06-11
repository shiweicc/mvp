import React from 'react';

const Display = (props) => {

  let meal = props.clickMeal;
  let name = meal.strMeal;
  let category = meal.strCategory;
  let instruction = meal.strInstructions;
  let youtube = meal.strYoutube;


  let handleYoutube = (e) => {
    let clickedLink = e.target.innerText;
    window.open(clickedLink);
  }

  return (
    <div>
      <h3>Your recipe: </h3>
      <p>{name}</p>
      <p>{category}</p>
      <p>{instruction}</p>
      <p onClick={(e)=> {handleYoutube(e)}}>{youtube}</p>
    </div>
  );
};

export default Display;


import React from 'react';

const MealItem = (props) => {
  // console.log('here in item: ', props.item.strCategory);

  let mealName = props.item.strMeal;

  return (
    <li>{mealName}</li>
  );
};

export default MealItem;
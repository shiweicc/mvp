import React from 'react';
import MealItem from './MealItem';

const MealList = (props) => {
  // console.log('here in list: ', props.category);

  const listMeal = props.meals.map(item => (
    <MealItem item={item} />
  ))

  return (
    <div>
      <h3>Search meals: </h3>
      <ul>
        {listMeal}
      </ul>
    </div>
  );
};

export default MealList;


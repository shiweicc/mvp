import React from 'react';
import CategoryItem from './CategoryItem';

const CategoryList = (props) => {
  // console.log('here in list: ', props.category);

  const listCategory = props.category.map(item => (
    <CategoryItem item={item} onClick={props.onClick}/>
  ))

  return (
    <div>
      <h3>🥩 Meals by categories: </h3>
      <ul>
        {listCategory}
      </ul>
    </div>
  );
};

export default CategoryList;


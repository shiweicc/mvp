import React from 'react';


const CategoryItem = (props) => {

  // console.log('here in item: ', props.item.strCategory);

  let category = props.item.strCategory;

  return (
    <li>{category}</li>
  );
};

export default CategoryItem;
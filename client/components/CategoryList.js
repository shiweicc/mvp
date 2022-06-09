import React from 'react';
import CategoryItem from './CategoryItem';

const CategoryList = (props) => {
  console.log('here in list: ', props.category);

  // const listCategory = props.category.map((item) => {
  //   <CategoryItem value={item.strCategory}/>
  // })

  return (
    <div>
      <h3>Meals by categories: </h3>
      <ul>
        {props.category.map(item => {
          <CategoryItem item={item}/>
        })}
        {/* <CategoryItem /> */}
      </ul>
    </div>
  );
};

export default CategoryList;


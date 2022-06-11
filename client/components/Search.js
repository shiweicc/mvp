import React from 'react';

const Search = (props) => {
  // console.log('props in search: ', props);

  return (
    <form>
      <label>
        <input type="text" name="name" onChange={(e) => {props.onChange(e)}}/>
      </label>
      <input type="submit" value="Search" onClick={(e) => {props.search(e)}}/>
    </form>
  );
};

export default Search;

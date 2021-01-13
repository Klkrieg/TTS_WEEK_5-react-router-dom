import React, { useState } from 'react';

export const Dropdown = () => {
  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState('');

  //create controlled input
  //create list of items based on input
  //make list visibile only when clicked

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue === '') {
      return;
    }
    setList([...list, inputValue]);
    setInputValue('');
  };
  const handleSortByName = () => {
    const sortedArr = list.sort();
    console.log(sortedArr);
    setList([...sortedArr]);
  };

  const handleSortByLength = () => {
    const sortedArr = list.sort((a, b) => {
      const aL = a.length;
      const bL = b.length;
      if (aL < bL) {
        return -1;
      } else if (aL > bL) {
        return 1;
      } else {
        return 0;
      }
    });
    setList([...sortedArr]);
  };

  return (
    <>
      <p>List</p>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          className='form-control-sm'
          value={inputValue}
          onChange={handleChange}
        />
        <button className='btn btn-outline-secondary' type='submit'>
          Submit
        </button>
      </form>

      <button className='btn btn-outline-dark' onClick={handleSortByName}>
        Sort by Name
      </button>
      <button className='btn btn-outline-dark' onClick={handleSortByLength}>
        Sort by Length
      </button>
      <ul>
        {list.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </>
  );
};

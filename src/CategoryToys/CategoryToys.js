import React from 'react';

import './CategoryToys.css';

export default function CategoryToys(props) {
  const { categories, name, toys } = props

  return (
    <select className='Category_Toys'
      name={ name }>{
        name === 'category' ? categories.map(({ id, name }) => (
          <option key={ id } value={ name }>{ name }</option>
        )) : toys.map(({ id, title }) => (
          <option key={ id } value={ name }>{ title }</option>
        ))
      }
    </select>
  );
}
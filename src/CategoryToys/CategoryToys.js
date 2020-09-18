import React from 'react';

import './CategoryToys.css';

export default function CategoryToys(props) {
  const { categories, name, toys, onInputComingChange } = props

  return (
    <select className='Category_Toys'
      onChange={ onInputComingChange }
      name={ name }>{
        name === 'category' ? categories.map(({ id, name }) => (
          <option key={ id } value={ name }>{ name }</option>
        )) : toys.map(({ id, title }) => (
          <option key={ id } value={ title }>{ title }</option>
        ))
      }
    </select>
  );
}
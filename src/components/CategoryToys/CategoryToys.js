import React from 'react';

import './CategoryToys.css';

export default function CategoryToys(props) {
  const { categories, name, toys, onInputComingChange } = props

  return (
    <select className='Category_Toys'
      required
      onChange={ onInputComingChange }
      name={ name }>{
        name === 'category' ? (Array.isArray(categories) && categories.map(({ id, name }) => (
          <option key={ id } value={ name }>{ name }</option>
        ))) : (Array.isArray(toys) && toys.map(({ id, name }) => (
          <option key={ id } value={ name }>{ name }</option>
        )))
      }
    </select>
  );
}
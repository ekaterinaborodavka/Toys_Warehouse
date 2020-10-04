import React from 'react';
import PropTypes from 'prop-types';

import './CategoryToys.css';

export default function CategoryToys(props) {
  const { categories, name, toys, onInputComingChange } = props;

  return (
    <select className='Category_Toys'
      required
      onChange={ onInputComingChange }
      name={ name }>
      <option hidden>{ name } toy</option>
      {name === 'category' ? (Array.isArray(categories) &&
      categories.map(({ id, name }) => (
        <option key={ id } value={ name }>{ name }</option>
      ))) : (Array.isArray(toys) && toys.map(({id, name}) => (
        <option key={ id } value={ name }>{ name }</option>
      )))
      }
    </select>
  );
}

CategoryToys.propTypes = {
  categories: PropTypes.array,
  toys: PropTypes.array,
  onInputComingChange: PropTypes.func,
  name: PropTypes.string,
};

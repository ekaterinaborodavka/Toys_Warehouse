import React from 'react';
import PropTypes from 'prop-types';

import './ToysListElement.css';

export default function ToysListElement(props) {
  const { name, quantity, description, category } = props.toy;

  return (
    <div className='ToysListElement'>
      <div className='ToysListElement_Column'>{ name }</div>
      <div className='ToysListElement_Column'>{ quantity }</div>
      <div className='ToysListElement_Column'>{ description }</div>
      <div className='ToysListElement_Column'>{ category.name }</div>
    </div>
  );
}

ToysListElement.propTypes = {
  toy: PropTypes.shape({
    name: PropTypes.string,
    quantity: PropTypes.number,
    description: PropTypes.string,
    category: PropTypes.shape({
      name: PropTypes.string,
    }),
  }),
};

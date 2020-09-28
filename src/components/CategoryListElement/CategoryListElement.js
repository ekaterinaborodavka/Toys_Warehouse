import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import './CategoryListElement.css';

export default function CategoryListElement(props) {
  const { name, id } = props.category;
  const { onDelete } = props;

  const onDeleteCategory = useCallback(
      () => {
        onDelete(id);
      }, [onDelete, id],
  );

  return (
    <div className='CategoryListElement'>
      <div className='CategoryListElement_Column'>{ name }</div>
      <button className='CategoryListElement_Button'
        onClick={ onDeleteCategory }>Delete</button>
    </div>
  );
}

CategoryListElement.propTypes = {
  category: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  }),
  onDelete: PropTypes.func,
};

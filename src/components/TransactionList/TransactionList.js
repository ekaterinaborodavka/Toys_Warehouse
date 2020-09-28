import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';

import './TransactionList.css';

export default function TransactionList(props) {
  const { items, transaction: { type, date, userId } } = props;
  const [open, setOpen] = useState(false);

  const changeOpen = useCallback(
      () => {
        setOpen(!open);
      }, [open],
  );

  return (
    <div className='Transaction_Item' onClick={ changeOpen }>
      <span className={ type === 'incoming' ?
                            'Incoming' : 'Outcoming'}>
        { type } { date } User: { userId }
      </span>
      {Array.isArray(items) && items.map((item) => {
        return (
          <div key={ item.id }
            className={ open ?
                            'Transaction_Item_Details_Open' :
                            'Transaction_Item_Details_Close' }>
                           Name: {item.name},
                           Quantity: {item.quantity},
                           Category: {item.category.name}
          </div>
        );
      }) }
    </div>
  );
}

TransactionList.propTypes = {
  items: PropTypes.array,
  transaction: PropTypes.shape({
    date: PropTypes.string,
    type: PropTypes.string,
    userId: PropTypes.string,
  }),
};

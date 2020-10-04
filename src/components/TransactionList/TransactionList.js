import React, { useCallback, useState } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import './TransactionList.css';

export default function TransactionList(props) {
  const { items, transaction: { type, date, userId } } = props;
  const [open, setOpen] = useState(false);
  const toys = useSelector((state) => state.toys.list, shallowEqual);

  const changeOpen = useCallback(
      () => {
        setOpen(!open);
      }, [open],
  );

  return (
    <div className='Transaction_Item' onClick={ changeOpen }>
      <span className={ type === 'incoming' ?
                            'Incoming' : 'Outcoming'}>
        { type } Date: { date.slice(0, 10) }
        { date.slice(11, 19) } User: { userId }
      </span>
      {Array.isArray(items) && items.map((item) => {
        const currentToy = toys.filter((el) => {
          return (
            item.name === el.name && item.category.name === el.category.name
          );
        });
        if (currentToy.length) {
          return (
            <div key={ item.id }
              className={ open ?
                              'Transaction_Item_Details_Open' :
                              'Transaction_Item_Details_Close' }>
              { type }: { item.name }
                            ({ item.category.name })
                            quantity: { item.quantity }<br />
              <span>Quantity of goods in stock:</span> <br />
                            Name: {currentToy[0].name},
                            Quantity: {currentToy[0].quantity},
                            Category: {currentToy[0].category.name}
            </div>
          );
        } else {
          return (
            <div key={ item.id }
              className={ open ?
                              'Transaction_Item_Details_Open' :
                              'Transaction_Item_Details_Close' }>
              { type }: { item.name }
                            ({ item.category.name })
                            quantity: { item.quantity }<br />
              <span>Quantity of goods in stock:</span> <br />
                            There is no more such item in stock
            </div>
          );
        }
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

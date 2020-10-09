import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';

import Navigation from '../Navigation/Navigation';
import TransactionList from '../TransactionList/TransactionList';

import './Transaction.css';

export default function Transaction() {
  const transactionList = useSelector((state) => state.toys.transaction,
      shallowEqual);

  return (
    <React.Fragment>
      <h1 className='Title'>Toys Warehouse</h1>
      <h2 className='Transaction_Title'>Transaction</h2>
      <Navigation />
      <div className='Transaction_Content'>
        { (transactionList.length === 0) ? 'Transaction page' :
                Array.isArray(transactionList) &&
                transactionList.map( (transaction) => {
                  return (
                    <TransactionList
                      transaction = { transaction }
                      items = { transaction.toys }
                      key={ transaction.id }
                    />
                  );
                }) }
      </div>
    </React.Fragment>
  );
}

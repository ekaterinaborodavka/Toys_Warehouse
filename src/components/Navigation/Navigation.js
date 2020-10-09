import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import * as toysActions from '../../Store/actions/toysAction';

import './Navigation.css'

export default function Navigation() {
    const history = useHistory();
    const dispatch = useDispatch();
    const goPages = useCallback(
        (e) => {
          history.push(`/${e.target.name}`);
          dispatch(toysActions.clearForm());
          if (e.target.name === 'incoming') {
            dispatch(toysActions.changeIncomin(true));
          } else if (e.target.name === 'outcoming') {
            dispatch(toysActions.changeIncomin(false));
          }
        }, [dispatch, history],
    );

    return (
        <div className='ToysList_Button'>
        <button className='Incoming_Button'
          name='toyslist'
          onClick={ goPages }>Toys List</button>
        <button className='Incoming_Button'
          name='incoming'
          onClick={ goPages }>Incoming</button>
        <button className='Outcoming_Button'
          name='outcoming'
          onClick={ goPages }>Outcoming</button>
        <button className='About_Button'
          name='about'
          onClick={ goPages }>About</button>
        <button className='Transactions_Button'
          name='transactions'
          onClick={ goPages }>Transactions</button>
        <button className='Categories_Button'
          name='categoryList'
          onClick={ goPages }>Categories</button>
      </div>
    )
}

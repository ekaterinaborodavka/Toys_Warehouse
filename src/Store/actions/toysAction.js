import { getList as getResource, 
        createItem as addItemResource } from '../../Resources/toys';
import { GET_TOYS, GET_TRANSACTIONS, CHANGE_INCOMIN, ADD_ITEM, BUY_ITEM } from '../types/types';

export const getToys = () => {
    return async (dispatch, getState) => {
      const token = getState().login.token

      dispatch({
        type: GET_TOYS,
        subtype: 'loading',
      });
      if(token){
        getResource('toys' ,token).then((res) => {
          dispatch({
            type: GET_TOYS,
            subtype: 'success',
            list: res.toys,
          });
        });
      }else{
        dispatch({
          type: GET_TOYS,
          subtype: 'failed',
          error: { message: 'Something went wrong' },
        });
      }
    };
  };

  export const getTransactions = () => {
    return async (dispatch, getState) => {
      const token = getState().login.token

      dispatch({
        type: GET_TRANSACTIONS,
        subtype: 'loading',
      });
      if(token){
        getResource('transactions',token).then((res) => {
          console.log(res.transactions);
          dispatch({
            type: GET_TRANSACTIONS,
            subtype: 'success',
            transaction: res.transactions,
          });
        });
      }else{
        dispatch({
          type: GET_TRANSACTIONS,
          subtype: 'failed',
          error: { message: 'Something went wrong' },
        });
      }
    };
  };

  export const addItem = (item) => async (dispatch, getState) =>{
    const state = getState();
    const token = getState().login.token
    dispatch({
      type: ADD_ITEM,
      subtype: 'loading',
    });
    addItemResource(item, token).then((res) => {
      console.log(res);
      // const newElem = {active: false, edit: false, ...res.data};
      // const newList = [...state.goods.list, newElem];
      dispatch({
        type: ADD_ITEM,
        subtype: 'success',
        // list: newList,
      });
    }, (addItemError) => {
      dispatch({
        type: ADD_ITEM,
        subtype: 'failed',
        error: addItemError.message,
      });
    });
  };

  // export const addItem = (list, item) => {
  //   return {
  //     type: ADD_ITEM,
  //     list,
  //     item,
  //   };
  // };

  export const buyItem = (list, item) => {
    return {
      type: BUY_ITEM,
      list,
      item,
    };
  };

  export const changeIncomin = (bool) => {
    return {
      type: CHANGE_INCOMIN,
      bool
    };
  };


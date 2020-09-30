import { getList as getResource,
  createItem as addItemResource,
  updateMergItem as updateItemResource,
  createTransaction as addTransactionResource} from '../../Resources/toys';
import { GET_TOYS,
  GET_TRANSACTIONS,
  CHANGE_INCOMIN,
  ADD_ITEM,
  BUY_ITEM,
  ADD_TRANSACTION } from '../types/types';
import { findItemInd,
  newItem,
  createNewList,
  newTransaction } from '../../Utils/toysUtils';

export const getToys = () => {
  return async (dispatch, getState) => {
    const token = getState().login.token;

    dispatch({
      type: GET_TOYS,
      subtype: 'loading',
    });
    if (token) {
      getResource('toys', token).then((res) => {
        dispatch({
          type: GET_TOYS,
          subtype: 'success',
          list: res.toys,
        });
      });
    } else {
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
    const token = getState().login.token;

    dispatch({
      type: GET_TRANSACTIONS,
      subtype: 'loading',
    });
    if (token) {
      getResource('transactions', token).then((res) => {
        dispatch({
          type: GET_TRANSACTIONS,
          subtype: 'success',
          transaction: res.transactions,
        });
      });
    } else {
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
  const token = state.login.token;
  const toysList = state.toys.list;
  const categoriesList = state.categories.categoriesList;
  const username = state.login.username;
  const newToy = newItem(toysList, item, categoriesList);
  const ind = findItemInd(toysList, newToy);
  const updateItem = toysList[ind];
  const transactionList = state.toys.transaction;

  dispatch({
    type: ADD_ITEM,
    subtype: 'loading',
  });
  if (ind === -1) {
    addItemResource(newToy, token).then((res) => {
      const newList = [...state.toys.list, res];
      const trans = newTransaction(transactionList, res, username, 'incoming');
      dispatch({
        type: ADD_ITEM,
        subtype: 'success',
        list: newList,
      });
      dispatch(addTransaction(trans));
    });
  } else {
    const toyUpdate = {...newToy,
      quantity: Number(newToy.quantity)+Number(updateItem.quantity)};
    updateItemResource(updateItem.id, toyUpdate, token).then((res) => {
      const newList = createNewList(toysList, ind, res);
      const trans = newTransaction(transactionList, res, username, 'incoming');
      dispatch({
        type: ADD_ITEM,
        subtype: 'success',
        list: newList,
      });
      dispatch(addTransaction(trans));
    });
  }
  dispatch({
    type: ADD_ITEM,
    subtype: 'failed',
    error: { message: 'Something went wrong' },
  });
};


export const buyItem = (item) => async (dispatch, getState) =>{
  const state = getState();
  const token = state.login.token;
  const toysList = state.toys.list;
  const categoriesList = state.categories.categoriesList;
  const newToy = newItem(toysList, item, categoriesList);
  const ind = findItemInd(toysList, newToy);
  const updateItem = toysList[ind];
  const transactionList = state.toys.transaction;
  const username = state.login.username;
  dispatch({
    type: BUY_ITEM,
    subtype: 'loading',
  });
  if (ind >= 0) {
    const toyUpdate = {...item,
      description: updateItem.description,
      quantity: Number(updateItem.quantity)-Number(item.quantity)};
    if (toyUpdate.quantity >= 0) {
      updateItemResource(updateItem.id, toyUpdate, token).then((res) => {
        const newList = createNewList(toysList, ind, res);
        const trans = newTransaction(transactionList,
            res, username, 'outcoming');
        dispatch({
          type: BUY_ITEM,
          subtype: 'success',
          list: newList,
        });
        dispatch(addTransaction(trans));
      });
    } else {
      alert('There is no such quantity in stock');
    }
  }
  dispatch({
    type: BUY_ITEM,
    subtype: 'failed',
    error: { message: 'This toy is not in stock' },
  }); ;
};

export const changeIncomin = (bool) => {
  return {
    type: CHANGE_INCOMIN,
    bool,
  };
};

export const addTransaction = (item) => async (dispatch, getState) =>{
  console.log('TRANSITEM', item);
  const state = getState();
  const token = state.login.token;

  dispatch({
    type: ADD_TRANSACTION,
    subtype: 'loading',
  });
  addTransactionResource(item, token).then((res) => {
    const newList = [...state.toys.transaction, res];
    dispatch({
      type: ADD_TRANSACTION,
      subtype: 'success',
      transaction: newList,
    });
  });
  dispatch({
    type: ADD_TRANSACTION,
    subtype: 'failed',
    error: { message: 'Something went wrong' },
  }); ;
};

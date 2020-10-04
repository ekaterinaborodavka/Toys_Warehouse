import { getList as getResource,
  createItem as addItemResource,
  updateMergItem as updateItemResource,
  removeItem as deleteItemResource,
  createTransaction as addTransactionResource} from '../../Resources/toys';
import { GET_TOYS,
  GET_TRANSACTIONS,
  CHANGE_INCOMIN,
  ADD_ITEM,
  BUY_ITEM,
  DELETE_ITEM,
  CLEAR_ERROR,
  ADD_TRANSACTION } from '../types/types';
import { findItemInd,
  newItem,
  createNewList,
  newTransaction,
  dispError,
  err } from '../../Utils/toysUtils';

export const changeIncomin = (bool) => {
  return {
    type: CHANGE_INCOMIN,
    bool,
  };
};

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
      }, (e) => {
        dispError(dispatch, GET_TOYS, err);
      });
    } else {
      dispError(dispatch, GET_TOYS, err);
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
      }, (e) => {
        dispError(dispatch, GET_TRANSACTIONS, err);
      });
    } else {
      dispError(dispatch, GET_TRANSACTIONS, err);
    }
  };
};

export const addItem = (item) => async (dispatch, getState) =>{
  const state = getState();
  const token = state.login.token;
  const toysList = state.toys.list;
  const categoriesList = state.categories.categoriesList;
  const newToy = newItem(toysList, item, categoriesList);
  const ind = findItemInd(toysList, newToy);
  const updateItem = toysList[ind];

  dispatch({
    type: ADD_ITEM,
    subtype: 'loading',
  });
  if (item.quantity > 0) {
    if (ind === -1) {
      addItemResource(newToy, token).then((res) => {
        const newList = [...state.toys.list, res];
        dispatch({
          type: ADD_ITEM,
          subtype: 'success',
          list: newList,
        });
      }).then(() => {
        dispatch(addTransaction(item, 'incoming'));
        dispatch(getToys());
      }, (e) => {
        dispError(dispatch, ADD_ITEM, err);
      });
    } else {
      const toyUpdate = {...newToy,
        quantity: Number(newToy.quantity)+Number(updateItem.quantity)};
      updateItemResource(updateItem.id, toyUpdate, token).then((res) => {
        const newList = createNewList(toysList, ind, res);
        dispatch({
          type: ADD_ITEM,
          subtype: 'success',
          list: newList,
        });
      }).then(() => {
        dispatch(addTransaction(item, 'incoming'));
        dispatch(getToys());
      }, (e) => {
        dispError(dispatch, ADD_ITEM, err);
      });
    }
  } else {
    dispError(dispatch, ADD_ITEM, err);
  }
};


export const buyItem = (item) => async (dispatch, getState) =>{
  const state = getState();
  const token = state.login.token;
  const toysList = state.toys.list;
  const categoriesList = state.categories.categoriesList;
  const newToy = newItem(toysList, item, categoriesList);
  const ind = findItemInd(toysList, newToy);
  const updateItem = toysList[ind];

  dispatch({
    type: BUY_ITEM,
    subtype: 'loading',
  });
  if (item.quantity > 0) {
    if (ind >= 0) {
      const toyUpdate = {...item,
        description: updateItem.description,
        quantity: Number(updateItem.quantity)-Number(item.quantity)};
      if (toyUpdate.quantity >= 0) {
        updateItemResource(updateItem.id, toyUpdate, token).then((res) => {
          const newList = createNewList(toysList, ind, res);
          dispatch({
            type: BUY_ITEM,
            subtype: 'success',
            list: newList,
          });
        }).then(() => {
          dispatch(addTransaction(item, 'outcoming'));
          dispatch(getToys());
        }, (e) => {
          dispError(dispatch, BUY_ITEM,
              { message: 'This toy is not in stock' });
        });
      } else {
        alert('There is no such quantity in stock');
        dispError(dispatch, BUY_ITEM,
            { message: 'There is no such quantity in stock' });
      }
    } else {
      dispError(dispatch, BUY_ITEM, err);
    }
  } else {
    dispError(dispatch, BUY_ITEM, err);
  }
};

export const deleteItem = (id) => async (dispatch, getState) =>{
  const state = getState();
  const token = state.login.token;
  const toysList = state.toys.list;

  dispatch({
    type: DELETE_ITEM,
    subtype: 'loading',
  });
  try {
    deleteItemResource(id, token).then(()=> {
      const newList = toysList.filter((e) => e.id !== id);
      dispatch({
        type: DELETE_ITEM,
        subtype: 'success',
        list: newList,
      });
    }, (e) => {
      dispError(dispatch, DELETE_ITEM, err);
    });
  } catch {
    dispError(dispatch, DELETE_ITEM, err);
  }
};

export const addTransaction = (item, type) => async (dispatch, getState) =>{
  const state = getState();
  const token = state.login.token;
  const toysList = state.toys.list;
  const categoriesList = state.categories.categoriesList;
  const username = state.login.profile.email;
  const newToy = newItem(toysList, item, categoriesList);
  const transactionList = state.toys.transaction;
  const trans = newTransaction(transactionList, newToy,
      username, type,
      categoriesList,
      toysList);

  dispatch({
    type: ADD_TRANSACTION,
    subtype: 'loading',
  });
  try {
    addTransactionResource(trans, token).then((res) => {
      const newList = [...state.toys.transaction, res];
      dispatch({
        type: ADD_TRANSACTION,
        subtype: 'success',
        transaction: newList,
      });
    }, (e) => {
      dispError(dispatch, ADD_TRANSACTION, e);
    });
  } catch {
    dispError(dispatch, ADD_TRANSACTION, err);
  }
};

export const clearForm = () => {
  return {
    type: CLEAR_ERROR,
  };
};

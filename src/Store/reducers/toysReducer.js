import { GET_TOYS, GET_TRANSACTIONS, CHANGE_INCOMIN, ADD_ITEM, BUY_ITEM } from '../types/types';
import { addNewItem, buyItem } from '../../Utils/toysUtils'

export const initialState = {
    list: [],
    error: null,
    loading: null,
    incoming: '',
    transaction: []
  };

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_TOYS: {
        return {
          ...state,
          list: action.subtype === 'success' ? action.list : state.toys,
          loading: action.subtype === 'loading',
          error: action.subtype === 'failed' ? action.error.message : null,
        };
      }
      case ADD_ITEM: {
        return {
          ...state,
          // list: action.subtype === 'success' ? action.list : state.toys,
          // loading: action.subtype === 'loading',
          // error: action.subtype === 'failed' ? action.error.message : null,
        };
      }
      case GET_TRANSACTIONS: {
        return {
          ...state,
          transaction: action.subtype === 'success' ? action.transaction : state.transaction,
          loading: action.subtype === 'loading',
          error: action.subtype === 'failed' ? action.error.message : null,
        };
      }
      case ADD_ITEM: {
        const newList = addNewItem(action.list, action.item);
        return {
          ...state,
          list: newList
        };
      }
      case BUY_ITEM: {
        const newList = buyItem(action.list, action.item);
        return {
          ...state,
          list: newList
        };
      }
      case CHANGE_INCOMIN: {
        return {
          ...state,
          incoming: action.bool
        };
      }
      default:
        return state;
    }
  };
  
  export default reducer;
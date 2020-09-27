import { GET_TOYS, GET_TRANSACTIONS, CHANGE_INCOMIN, ADD_ITEM, BUY_ITEM } from '../types/types';

export const initialState = {
    list: [],
    error: null,
    loading: null,
    incoming: '',
    transaction: []
  };

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_TOYS:
        case ADD_ITEM: 
          case BUY_ITEM:{
        return {
          ...state,
          list: action.subtype === 'success' ? action.list : state.toys,
          loading: action.subtype === 'loading',
          error: action.subtype === 'failed' ? action.error.message : null,
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
import { GET_TOYS, CHANGE_INCOMIN, ADD_ITEM, BUY_ITEM } from '../types/types';
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
          error: action.subtype === 'failed' ? action.error : null,
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
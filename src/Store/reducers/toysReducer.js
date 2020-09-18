import { GET_TOYS, CHANGE_INCOMIN, ADD_ITEM } from '../types/types';
import { addNewItem } from '../../Utils/toysUtils'
import { toys } from '../../Utils/toys'

export const initialState = {
    list: toys,
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
          error: action.subtype === 'loading',
          loading: action.subtype === 'failed' ? action.error : null,
        };
      }
      case ADD_ITEM: {
        const newList = addNewItem(action.list, action.item);
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
import { GET_TOYS, GET_TITLE_CATEGORY, CHANGE_INCOMIN } from '../types/types';
import { toys } from '../../Utils/toys'

export const initialState = {
    list: toys,
    titleCategiry: [],
    error: null,
    loading: null,
    incoming: ''
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
      case GET_TITLE_CATEGORY: {
        return {
          ...state,
          titleCategiry: action.category
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
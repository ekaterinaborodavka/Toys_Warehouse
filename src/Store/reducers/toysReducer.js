import { GET_TOYS } from '../types/types';
import { toys } from '../../Utils/toys'

export const initialState = {
    list: toys,
    error: null,
    loading: null,
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
      default:
        return state;
    }
  };
  
  export default reducer;
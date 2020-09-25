import { GET_CATEGORY, DELETE_CATEGORY, UPDATE_FORM_CATEGORY, ADD_NEW_CATEGORY, CLEAR_FORM } from '../types/types';
import { removeCategory, addCategory } from '../../Utils/toysUtils'

export const initialState = {
    categoriesList: [],
    newCategory: '',
    error: null,
    loading: null
  };

  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_CATEGORY: 
      case DELETE_CATEGORY:
      case ADD_NEW_CATEGORY:{
        return {
          ...state,
          categoriesList: action.subtype === 'success' ? action.list : state.categoriesList,
          loading: action.subtype === 'loading',
          error: action.subtype === 'failed' ? action.error.message : null,
        };
      }
      case UPDATE_FORM_CATEGORY: {
        return{
            ...state,
            newCategory: action.update
        }
      }
      default:
        return state;
    }
  };
  
  export default reducer;
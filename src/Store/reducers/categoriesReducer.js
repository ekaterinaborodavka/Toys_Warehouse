import { GET_CATEGORY, DELETE_CATEGORY, UPDATE_FORM_CATEGORY, ADD_NEW_CATEGORY, CLEAR_FORM } from '../types/types';
import { removeCategory, addCategory } from '../../Utils/toysUtils'

export const initialState = {
    categoriesList: [],
    newCategory: ''
  };

  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_CATEGORY: {
        return {
          ...state,
          categoriesList: action.subtype === 'success' ? action.list : state.categoriesList,
          loading: action.subtype === 'loading',
          error: action.subtype === 'failed' ? action.error.message : null,
        };
      }
      case DELETE_CATEGORY: {
        const newCategoryList = removeCategory(action.toys, state.categoriesList, action.id)
        return{
            ...state,
            categoriesList: newCategoryList
        }
      }
      case UPDATE_FORM_CATEGORY: {
        return{
            ...state,
            newCategory: action.update
        }
      }
      case ADD_NEW_CATEGORY: {
        const newCategoryList = addCategory(state.categoriesList, action.category)
        return{
            ...state,
            categoriesList: newCategoryList 
        }
      }
      default:
        return state;
    }
  };
  
  export default reducer;
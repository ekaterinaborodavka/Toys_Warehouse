import { DELETE_CATEGORY, UPDATE_FORM_CATEGORY, ADD_NEW_CATEGORY, CLEAR_FORM } from '../types/types';
import { categories } from '../../Utils/CategotyToys';
import { removeCategory, addCategory } from '../../Utils/toysUtils'

export const initialState = {
    categoriesList: categories,
    newCategory: ''
  };

  const reducer = (state = initialState, action) => {
    switch (action.type) {
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
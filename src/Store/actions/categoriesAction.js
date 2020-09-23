import { DELETE_CATEGORY, UPDATE_FORM_CATEGORY, ADD_NEW_CATEGORY, CLEAR_FORM } from '../types/types';

export const deleteCategory = (toys, id) => {
  return {
    type: DELETE_CATEGORY,
    toys,
    id,
  };
};

export const updateFormCategory = (update) => {
    return {
      type: UPDATE_FORM_CATEGORY,
      update,
    };
  };

  export const addNewCategory = (category) => {
    return {
      type: ADD_NEW_CATEGORY,
      category,
    };
  };
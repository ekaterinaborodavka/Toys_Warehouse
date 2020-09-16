import { DELETE_CATEGORY, UPDATE_FORM_CATEGORY, ADD_NEW_CATEGORY } from '../types/types';

export const deleteCategory = (id) => {
  return {
    type: DELETE_CATEGORY,
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
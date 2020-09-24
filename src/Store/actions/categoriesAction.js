import { getList as getCategoriesResource } from '../../Resources/toys';
import { GET_CATEGORY, DELETE_CATEGORY, UPDATE_FORM_CATEGORY, ADD_NEW_CATEGORY, CLEAR_FORM } from '../types/types';

export const getCategory = () => {
  return async (dispatch, getState) => {
    const token = getState().login.token

    dispatch({
      type: GET_CATEGORY,
      subtype: 'loading',
    });

    getCategoriesResource('categories' ,token).then((res) => {
        dispatch({
          type: GET_CATEGORY,
          subtype: 'success',
          list: res.categories,
        });
      });

      dispatch({
        type: GET_CATEGORY,
        subtype: 'failed',
        error: { message: 'Something went wrong' },
      });
  };
};

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
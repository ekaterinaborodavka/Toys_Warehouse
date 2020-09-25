import { getList as getCategoriesResource, removeCategory, createCategory } from '../../Resources/toys';
import { GET_CATEGORY, DELETE_CATEGORY, UPDATE_FORM_CATEGORY, ADD_NEW_CATEGORY, CLEAR_FORM } from '../types/types';

export const getCategory = () => async (dispatch, getState) => {
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

export const deleteCategory = (id) => async (dispatch, getState) =>{
  const state = getState();
  const token = getState().login.token
  dispatch({
    type: DELETE_CATEGORY,
    subtype: 'loading',
  });
  removeCategory(id, token).then((res)=> {
    console.log('RES', res, 'ID', id);
    const newList = state.categories.categoriesList.filter((e) => e.id !== id);
    dispatch({
      type: DELETE_CATEGORY,
      subtype: 'success',
      list: newList
    });
  });
  dispatch({
    type: DELETE_CATEGORY,
    subtype: 'failed',
    error: { message: 'Something went wrong' },
  });
};

export const addNewCategory = (item) => async (dispatch, getState) =>{
  const state = getState();
  const token = getState().login.token
  const catList = state.categories.categoriesList
  let catId = catList.length
  const newCat = {id: `${++catId}` , name:item }

  dispatch({
    type: ADD_NEW_CATEGORY,
    subtype: 'loading',
  });
  createCategory(newCat, token).then((res) => {
    console.log(res);
    const newList = [...catList, res];
    dispatch({
      type: ADD_NEW_CATEGORY,
      subtype: 'success',
      list: newList,
    });
  });

  dispatch({
    type: ADD_NEW_CATEGORY,
    subtype: 'failed',
    error: { message: 'Something went wrong' },
  });
};

export const updateFormCategory = (update) => {
    return {
      type: UPDATE_FORM_CATEGORY,
      update,
    };
  };
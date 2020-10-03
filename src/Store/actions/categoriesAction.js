import { getList as getCategoriesResource,
  removeCategory,
  createCategory } from '../../Resources/toys';
import { GET_CATEGORY,
  DELETE_CATEGORY,
  UPDATE_FORM_CATEGORY,
  ADD_NEW_CATEGORY} from '../types/types';
import * as toysActions from '../../Store/actions/toysAction';

export const getCategory = () => async (dispatch, getState) => {
  const token = getState().login.token;

  dispatch({
    type: GET_CATEGORY,
    subtype: 'loading',
  });
  getCategoriesResource('categories', token).then((res) => {
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
  const token = state.login.token;
  const toysList = state.toys.list;
  const categoriesList = state.categories.categoriesList;
  const cat = categoriesList.filter((e) => e.id === id);
  const catItem = toysList.filter((e) => e.category.name === cat[0].name);
  console.log(catItem);
  dispatch({
    type: DELETE_CATEGORY,
    subtype: 'loading',
  });
  if (catItem.length === 0 || catItem[0].quantity === 0) {
    if(catItem.length === 0){
      removeCategory(id, token).then(()=> {
        const newList = categoriesList.filter((e) => e.id !== id);
        dispatch({
          type: DELETE_CATEGORY,
          subtype: 'success',
          list: newList,
        });
      });
    }else{
      dispatch(toysActions.deleteItem(catItem[0].id)).then(() => {
        removeCategory(id, token).then(()=> {
          const newList = categoriesList.filter((e) => e.id !== id);
          dispatch({
            type: DELETE_CATEGORY,
            subtype: 'success',
            list: newList,
          });
        });
      })
    }
  }
  dispatch({
    type: DELETE_CATEGORY,
    subtype: 'failed',
    error: {message: 'Something went wromg'},
  });
};

export const addNewCategory = (item) => async (dispatch, getState) =>{
  const state = getState();
  const token = state.login.token;
  const catList = state.categories.categoriesList;
  let catId = catList.length;
  const newCat = {id: `${++catId}`, name: item };

  dispatch({
    type: ADD_NEW_CATEGORY,
    subtype: 'loading',
  });
  createCategory(newCat, token).then((res) => {
    const newList = [...catList, res];
    dispatch({
      type: ADD_NEW_CATEGORY,
      subtype: 'success',
      list: newList,
    });
  }, (e) => {
    dispatch({
      type: ADD_NEW_CATEGORY,
      subtype: 'failed',
      error: e.message,
    });
  });
};

export const updateFormCategory = (update) => {
  return {
    type: UPDATE_FORM_CATEGORY,
    update,
  };
};

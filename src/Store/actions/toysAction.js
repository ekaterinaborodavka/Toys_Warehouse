import { getList as getToysResource } from '../../Resources/toys';
import { GET_TOYS, CHANGE_INCOMIN, ADD_ITEM, BUY_ITEM } from '../types/types';

export const getToys = () => {
    return async (dispatch, getState) => {
      const token = getState().login.token

      dispatch({
        type: GET_TOYS,
        subtype: 'loading',
      });
      if(token){
        getToysResource('toys' ,token).then((res) => {
          dispatch({
            type: GET_TOYS,
            subtype: 'success',
            list: res.toys,
          });
        });
      }else{
        dispatch({
          type: GET_TOYS,
          subtype: 'failed',
          error: { message: 'Something went wrong' },
        });
      }
    };
  };

  export const addItem = (list, item) => {
    return {
      type: ADD_ITEM,
      list,
      item,
    };
  };

  export const buyItem = (list, item) => {
    return {
      type: BUY_ITEM,
      list,
      item,
    };
  };

  export const changeIncomin = (bool) => {
    return {
      type: CHANGE_INCOMIN,
      bool
    };
  };


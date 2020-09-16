import { getToys as getToysResource } from '../../Resources/toys';
import { GET_TOYS, CHANGE_INCOMIN } from '../types/types';

export const getToys = () => {
    return async (dispatch, getState) => {
      dispatch({
        type: GET_TOYS,
        subtype: 'loading',
      });
      getToysResource().then((res) => {
        dispatch({
          type: GET_TOYS,
          subtype: 'success',
          list: res,
        });
      }, (error) => {
        dispatch({
          type: GET_TOYS,
          subtype: 'failed',
          error: error.message,
        });
      });
    };
  };

  export const changeIncomin = (bool) => {
    return {
      type: CHANGE_INCOMIN,
      bool
    };
  };
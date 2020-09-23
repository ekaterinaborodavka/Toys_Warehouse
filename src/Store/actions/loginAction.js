import { LOGIN, UPDATE_FORM_LOGIN } from '../types/types';
import { createAuthorized } from '../../Resources/toys';
import { initToken } from '../../Services/networkProvider'

export const login = (item) => {
  return async (dispatch, getState) => {
    dispatch({
      type: LOGIN,
      subtype: 'loading',
    });
    createAuthorized(item).then((res) => {
      initToken(res)
      dispatch({
        type: LOGIN,
        subtype: 'success',
        token: res,
        username: item.email
      });
    }, (error) => {
      dispatch({
        type: LOGIN,
        subtype: 'failed',
        error: error.message,
      });
    });
  };
};

export const updateFormLogin = (login) => {
  return {
    type: UPDATE_FORM_LOGIN,
    login
  };
};
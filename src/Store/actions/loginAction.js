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
      if(res){
        initToken(res)
        localStorage.setItem('token', res)
        dispatch({
          type: LOGIN,
          subtype: 'success',
          token: res,
          username: item.email
        });
      }
    });
      dispatch({
        type: LOGIN,
        subtype: 'failed',
        error: { message: 'Password or login incorrect' },
      });
  };
};

export const updateFormLogin = (login) => {
  return {
    type: UPDATE_FORM_LOGIN,
    login
  };
};
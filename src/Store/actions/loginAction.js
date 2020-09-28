import { LOGIN, UPDATE_FORM_LOGIN } from '../types/types';
import { createAuthorized } from '../../Resources/toys';
import * as toysActions from '../../Store/actions/toysAction';
import * as categoriesActions from '../../Store/actions/categoriesAction';

export const login = (item) => {
  return async (dispatch, getState) => {
    dispatch({
      type: LOGIN,
      subtype: 'loading',
    });
    createAuthorized(item).then((res) => {
      if (res) {
        localStorage.setItem('token', res);
        dispatch({
          type: LOGIN,
          subtype: 'success',
          token: res,
          username: item.email,
        });
      }
      return res;
    }).then(() => {
      dispatch(toysActions.getToys());
      dispatch(categoriesActions.getCategory());
      dispatch(toysActions.getTransactions());
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
    login,
  };
};

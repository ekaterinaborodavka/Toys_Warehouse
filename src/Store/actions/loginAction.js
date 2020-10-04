import { LOGIN, UPDATE_FORM_LOGIN, GET_LOGIN } from '../types/types';
import { createAuthorized,
  getList as getResource } from '../../Resources/toys';
import * as toysActions from '../../Store/actions/toysAction';
import * as categoriesActions from '../../Store/actions/categoriesAction';
import { dispError, err } from '../../Utils/toysUtils';

export const login = (item) => {
  return async (dispatch, getState) => {
    dispatch({
      type: LOGIN,
      subtype: 'loading',
    });
    const result = await createAuthorized(item).then((res) => {
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
    }).then((res) => {
      if (res) {
        dispatch(toysActions.getToys());
        dispatch(categoriesActions.getCategory());
        dispatch(toysActions.getTransactions());
        dispatch(getLogin());
        return res;
      }
    }, (e) => {
      dispError(dispatch, LOGIN, { message: 'Password or login incorrect' });
    });
    dispError(dispatch, LOGIN, { message: 'Password or login incorrect' });
    return result;
  };
};

export const getLogin = () => {
  return async (dispatch, getState) => {
    const token = getState().login.token;

    dispatch({
      type: GET_LOGIN,
      subtype: 'loading',
    });
    if (token) {
      getResource('profile', token).then((res) => {
        dispatch({
          type: GET_LOGIN,
          subtype: 'success',
          profile: res,
        });
      }, (e) => {
        dispError(dispatch, GET_LOGIN, err);
      });
    } else {
      dispError(dispatch, GET_LOGIN, err);
    }
  };
};

export const updateFormLogin = (login) => {
  return {
    type: UPDATE_FORM_LOGIN,
    login,
  };
};

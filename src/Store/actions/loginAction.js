import { LOGIN, UPDATE_FORM_LOGIN, GET_LOGIN } from '../types/types';
import { createAuthorized,
        getList as getResource, } from '../../Resources/toys';
import * as toysActions from '../../Store/actions/toysAction';
import * as categoriesActions from '../../Store/actions/categoriesAction';

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
      return res
    }).then((res) => {
     if(res){
      dispatch(toysActions.getToys());
      dispatch(categoriesActions.getCategory());
      dispatch(toysActions.getTransactions());
      dispatch(getLogin())
      return res
     }
    });
    dispatch({
      type: LOGIN,
      subtype: 'failed',
      error: { message: 'Password or login incorrect' },
    })
    return result
  }
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
        console.log('PROFILERES',res);
        dispatch({
          type: GET_LOGIN,
          subtype: 'success',
          profile: res,
        });
      });
    } else {
      dispatch({
        type: GET_LOGIN,
        subtype: 'failed',
        error: { message: 'Something went wrong' },
      });
    }
  };
};

export const updateFormLogin = (login) => {
  return {
    type: UPDATE_FORM_LOGIN,
    login,
  };
};

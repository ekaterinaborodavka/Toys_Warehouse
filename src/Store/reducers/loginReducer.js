import { LOGIN, UPDATE_FORM_LOGIN, GET_LOGIN } from '../types/types';

export const initialState = {
  token: localStorage.token,
  form: {},
  loading: null,
  error: null,
  profile: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        token: action.subtype === 'success' ? action.token : state.token,
        username: action.subtype === 'success' ? action.username : null,
        loading: action.subtype === 'loading',
        error: action.subtype === 'failed' ? action.error : null,
      };
    }
    case GET_LOGIN: {
      return {
        ...state,
        profile: action.subtype === 'success' ? action.profile : null,
        loading: action.subtype === 'loading',
        error: action.subtype === 'failed' ? action.error : null,
      };
    }
    case UPDATE_FORM_LOGIN: {
      return {
        ...state,
        form: {
          ...state.form,
          ...action.login,
        },
      };
    }
    default:
      return state;
  }
};

export default reducer;

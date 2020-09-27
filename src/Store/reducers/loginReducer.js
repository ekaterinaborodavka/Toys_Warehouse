import { LOGIN, UPDATE_FORM_LOGIN } from '../types/types';

export const initialState = {
    username: '',
    token: localStorage.getItem('token'),
    form: {},
    loading: null,
    error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        token: action.subtype === 'success' ? action.token : null, 
        username: action.subtype === 'success' ? action.username : null,
        loading: action.subtype === 'loading', 
        error: action.subtype === 'failed' ? action.error : null,  
      };
    }
    case UPDATE_FORM_LOGIN: {
      return {
        ...state,
        form: {
          ...state.form,
          ...action.login
        } 
      };
    }
    default:
      return state;
  }
};

export default reducer;
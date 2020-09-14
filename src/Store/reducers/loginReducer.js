import { LOGIN } from '../types/types';

export const initialState = {
    password: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        password: action.password
      };
    }
    default:
      return state;
  }
};

export default reducer;
import { LOGIN } from '../types/types';

export const initialState = {
    password: '',
    email:''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        ...action.payload
      };
    }
    default:
      return state;
  }
};

export default reducer;
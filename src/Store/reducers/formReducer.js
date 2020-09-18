import { UPDATE_FORM_TOY } from '../types/types';

export const initialState = {
    title: '',
    quantity: '',
    description: '',
    category: '',
  };

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_FORM_TOY: {
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
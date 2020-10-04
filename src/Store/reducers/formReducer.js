import { UPDATE_FORM_TOY,
  CLEAR_FORM,
  ADD_NEW_CATEGORY,
  ADD_ITEM,
  INCOMING,
  OUTCOMING } from '../types/types';

export const initialState = {
  name: '',
  quantity: '',
  description: '',
  category: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FORM_TOY: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case CLEAR_FORM:
    case ADD_NEW_CATEGORY:
    case ADD_ITEM:
    case INCOMING:
    case OUTCOMING: {
      return {
        ...initialState,
      };
    }
    default:
      return state;
  }
};

export default reducer;

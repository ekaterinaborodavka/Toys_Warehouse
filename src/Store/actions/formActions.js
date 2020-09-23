import { UPDATE_FORM_TOY, CLEAR_FORM } from '../types/types';

  export const updateFormToy = (updateForm) => {
    return {
      type: UPDATE_FORM_TOY,
      payload: updateForm
    };
  };

  export const clearForm = () => {
    return {
      type: CLEAR_FORM,
    };
  };
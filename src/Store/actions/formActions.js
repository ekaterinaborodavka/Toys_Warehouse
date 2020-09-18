import { UPDATE_FORM_TOY } from '../types/types';

  export const updateFormToy = (updateForm) => {
    return {
      type: UPDATE_FORM_TOY,
      payload: updateForm
    };
  };
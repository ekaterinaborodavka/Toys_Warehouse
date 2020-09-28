
import { combineReducers } from 'redux';

import login from './loginReducer';
import toys from './toysReducer';
import categories from './categoriesReducer';
import form from './formReducer';

export default combineReducers({
  login,
  toys,
  categories,
  form,
});

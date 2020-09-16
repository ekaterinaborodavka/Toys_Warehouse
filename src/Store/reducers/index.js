
import { combineReducers } from 'redux';

import login from './loginReducer';
import toys from './toysReducer';
import categories from './categoriesReducer';

export default combineReducers({
  login,
  toys,
  categories
});

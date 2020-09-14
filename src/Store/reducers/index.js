
import { combineReducers } from 'redux';

import login from './loginReducer';
import toys from './toysReducer';

export default combineReducers({
  login,
  toys,
});

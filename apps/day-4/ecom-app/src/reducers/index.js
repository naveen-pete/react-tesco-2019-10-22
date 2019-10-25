import { combineReducers } from 'redux';

import products from './products';
import categories from './categories';
import authInfo from './auth';

export default combineReducers({
  products,
  categories,
  authInfo
});

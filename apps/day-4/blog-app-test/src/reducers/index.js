import { combineReducers } from 'redux';

import { posts, categories, currentCategory } from './posts';

const appReducer = combineReducers({
  posts,
  categories,
  currentCategory
});

export default appReducer;

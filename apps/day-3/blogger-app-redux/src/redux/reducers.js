import { combineReducers } from 'redux';

import * as ActionType from './constants';

const categoriesReducer = (state = [], action) => {
  switch (action.type) {
    case ActionType.GET_CATEGORIES:
      return [...action.payload];

    default:
      return state;
  }
};

const postsReducer = (state = [], action) => {
  switch (action.type) {
    case ActionType.GET_POSTS:
      return [...action.payload];

    case ActionType.GET_ONE_POST:
      return state.map(p => p.id === action.payload.id ? action.payload : p);

    default:
      return state;
  }
}

const appReducers = combineReducers({
  categories: categoriesReducer,
  posts: postsReducer
});

export default appReducers;
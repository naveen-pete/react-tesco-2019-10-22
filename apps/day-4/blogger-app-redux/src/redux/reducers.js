import { combineReducers } from 'redux';

import { categoryAll } from '../store';
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

    case ActionType.CREATE_POST:
      return [...state, action.payload];

    case ActionType.DELETE_POST:
      return state.filter(p => p.id !== parseInt(action.payload))

    default:
      return state;
  }
}

const selectedCategoryReducer = (state = categoryAll, action) => {
  switch (action.type) {
    case ActionType.SELECT_CATEGORY:
      return { ...action.payload };

    default:
      return state;
  }
}

const appReducers = combineReducers({
  categories: categoriesReducer,
  posts: postsReducer,
  selectedCategory: selectedCategoryReducer
});

export default appReducers;
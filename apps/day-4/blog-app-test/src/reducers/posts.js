import * as PostActionType from '../actions';
import { CATEGORY_ALL } from '../components/posts/defaults';

export function posts(state = [], action) {
  let newState = [];
  let filteredPosts = [];

  switch (action.type) {
    case PostActionType.GET_POSTS:
      newState = [...action.payload];
      return newState;

    case PostActionType.CREATE_POST:
      const newPost = action.payload;
      newState = [newPost, ...state];
      return newState;

    case PostActionType.GET_POST:
    case PostActionType.UPDATE_POST:
      const currentPost = action.payload;
      const posts = state.map(post => post.id === currentPost.id ? currentPost : post);
      newState = [...posts];
      return newState;

    case PostActionType.DELETE_POST:
      const postId = action.payload;
      filteredPosts = state.filter(post => post.id !== postId);
      newState = [...filteredPosts];
      return newState;

    default:
      return state;
  }
}

export function categories(state = [], action) {
  let newState = [];

  switch (action.type) {
    case PostActionType.GET_CATEGORIES:
      newState = [...action.payload];
      return newState;

    default:
      return state;
  }
}

export function currentCategory(state = CATEGORY_ALL, action) {
  switch (action.type) {
    case PostActionType.SET_CURRENT_CATEGORY:
      return action.payload;

    default:
      return state;
  }
}

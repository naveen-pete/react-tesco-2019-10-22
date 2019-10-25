import * as PostActionType from './index';
import * as BookAppApi from '../api';

export function getPosts() {
  const request = BookAppApi.getPosts();

  return {
    type: PostActionType.GET_POSTS,
    payload: request
  };
}

export function getPost(id, callback = null) {
  const request = BookAppApi.getPost(id);

  if (callback) {
    request.then(callback);
  }

  return {
    type: PostActionType.GET_POST,
    payload: request
  };
}

export function createPost(post, callback = null) {
  const request = BookAppApi.addPost(post);

  if (callback) {
    request.then(callback);
  }

  return {
    type: PostActionType.CREATE_POST,
    payload: request
  };
}

export function updatePost(post, callback = null) {
  const request = BookAppApi.updatePost(post);

  if (callback) {
    request.then(callback);
  }

  return {
    type: PostActionType.UPDATE_POST,
    payload: request
  };
}

export function deletePost(id, callback = null) {
  const request = BookAppApi.deletePost(id);

  if (callback) {
    request.then(callback);
  }

  return {
    type: PostActionType.DELETE_POST,
    payload: id
  };
}

export function getCategories() {
  const request = BookAppApi.getCategories();

  return {
    type: PostActionType.GET_CATEGORIES,
    payload: request
  };
}

export function setCurrentCategory(category) {
  return {
    type: PostActionType.SET_CURRENT_CATEGORY,
    payload: category
  };
}

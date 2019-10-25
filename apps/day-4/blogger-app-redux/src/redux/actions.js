import * as ActionType from './constants';
import { getCategories as getCategoriesApi } from '../api/categories';
import * as PostsApi from '../api/posts';

export const getCategories = () => {

  return (dispatch) => {
    getCategoriesApi()
      .then(categories => dispatch({
        type: ActionType.GET_CATEGORIES,
        payload: categories
      }))
      .catch(error => {
        console.log('Get categories failed.');
        console.log('Error:', error);
      });
  };

};

export const getPosts = () => {
  return (dispatch) => {
    PostsApi.getPosts()
      .then(posts => dispatch({
        type: ActionType.GET_POSTS,
        payload: posts
      }))
      .catch(error => {
        console.log('Get posts failed.');
        console.log('Error:', error);
      })
  }
}

export const getOnePost = id => {
  return (dispatch) => {
    PostsApi.getPost(id)
      .then(post => dispatch({
        type: ActionType.GET_ONE_POST,
        payload: post
      }))
      .catch(error => {
        console.log('Get post failed.');
        console.log('Error:', error);
      })
  };
}

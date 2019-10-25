import configureMockStore from 'redux-mock-store';
import promise from 'redux-promise';

import * as Action from '../actions';
import * as ActionCreator from './posts';
import * as Api from '../api';
import posts from '../test-fixtures/posts';

jest.mock('../api');

const createMockStore = configureMockStore([promise]);

test('should get list of posts from the server', () => {
  Api.getPosts.mockImplementation(() => Promise.resolve(posts));
  const expectedActions = [
    { type: Action.GET_POSTS, payload: posts }
  ];

  const store = createMockStore({});
  return store.dispatch(ActionCreator.getPosts()).then(() => {
    expect(store.getActions()).toEqual(expectedActions);
  });
});

test('should get a post for a specific post id', () => {
  const post = posts[0];
  const cb = jest.fn();
  Api.getPost.mockImplementation((id) => Promise.resolve(post));
  const expectedActions = [
    { type: Action.GET_POST, payload: post }
  ];

  const store = createMockStore({});
  return store.dispatch(ActionCreator.getPost(1, cb)).then(() => {
    expect(cb).toHaveBeenCalledWith(post);
    expect(store.getActions()).toEqual(expectedActions);
  });
});

test('should create a post', () => {
  const post = {
    timestamp: 100,
    title: "test post",
    body: "test post body",
    author: "tester",
    category: "testCat",
    voteScore: 10,
    commentCount: 20
  };
  
  const cb = jest.fn();
  Api.addPost.mockImplementation((post) => Promise.resolve(post));
  const expectedActions = [
    { type: Action.CREATE_POST, payload: post }
  ];

  const store = createMockStore({});
  return store.dispatch(ActionCreator.createPost(post, cb)).then(() => {
    expect(cb).toHaveBeenCalled();
    expect(store.getActions()).toEqual(expectedActions);
  });
});

test('should update a post', () => {
  const post = posts[2];
  const cb = jest.fn();
  Api.updatePost.mockImplementation((post) => Promise.resolve(post));
  const expectedActions = [
    { type: Action.UPDATE_POST, payload: post }
  ];

  const store = createMockStore({});
  return store.dispatch(ActionCreator.updatePost(post, cb)).then(() => {
    expect(cb).toHaveBeenCalled();
    expect(store.getActions()).toEqual(expectedActions);
  });
});

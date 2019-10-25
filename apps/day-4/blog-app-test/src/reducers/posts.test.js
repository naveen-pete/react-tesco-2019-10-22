import posts from '../test-fixtures/posts';
import * as ActionType from '../actions';
import { posts as postsReducer } from './posts';

test('should initialize posts state', () => {
  const result = postsReducer(undefined, { type: '@@INIT'} );
  expect(result).toEqual([]);
});

test('should get all posts', () => {
  const action = {
    type: ActionType.GET_POSTS,
    payload: [...posts]
  };

  const result = postsReducer(undefined, action);
  expect(result).toEqual(posts);
});

test('should add a new post', () => {
  const newPost = {
    "id": 5,
    "timestamp": 1468479767190,
    "title": "Angular - The Complete Guide",
    "body": "This course introduces you to all the concepts of Angular.",
    "author": "max",
    "category": "angular",
    "voteScore": 2,
    "commentCount": 5
  };

  const action = {
    type: ActionType.CREATE_POST,
    payload: newPost
  };

  const currentState = [...posts];

  const newState = postsReducer(currentState, action);
  expect(newState.length).toBe(currentState.length + 1);
  expect(newState).toContain(newPost);
});

test('should update a post', () => {
  const post = {
    "id": 3,
    "timestamp": 1468479767190,
    "title": "Angular - The Complete Guide",
    "body": "This course introduces you to all the concepts of Angular.",
    "author": "max",
    "category": "angular",
    "voteScore": 2,
    "commentCount": 5
  };

  const action = {
    type: ActionType.UPDATE_POST,
    payload: post
  };

  const currentState = [...posts];

  const newState = postsReducer(currentState, action);
  expect(newState.length).toBe(currentState.length);
  expect(newState).toContain(post);
});

test('should not update a post if id is not found', () => {
  const post = {
    "id": 10,
    "timestamp": 1468479767190,
    "title": "Angular - The Complete Guide",
    "body": "This course introduces you to all the concepts of Angular.",
    "author": "max",
    "category": "angular",
    "voteScore": 2,
    "commentCount": 5
  };

  const action = {
    type: ActionType.UPDATE_POST,
    payload: post
  };

  const currentState = [...posts];

  const newState = postsReducer(currentState, action);
  expect(newState.length).toBe(currentState.length);
  expect(newState).not.toContain(post);
});

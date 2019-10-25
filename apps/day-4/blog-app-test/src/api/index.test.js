import fetchMock from 'fetch-mock';

import * as Api from './index';
import posts from '../test-fixtures/posts';

const apiUrlPosts = `${Api.baseApiUrl}/posts`;

afterEach(() => {
  fetchMock.restore();
});

test('should get posts from the server', () => {
  fetchMock.get(apiUrlPosts, posts);

  return Api.getPosts().then((response) => {
    expect(response).toEqual(posts);
  });
});

test('should get a post for a specific post id from the server', () => {
  const post = posts[2];
  fetchMock.get(`${apiUrlPosts}/${post.id}`, post);

  return Api.getPost(post.id).then((response) => {
    expect(response).toEqual(post);
  });
});

test('should create a post in the server', () => {
  const post = {
    timestamp: 100,
    title: "test post",
    body: "test post body",
    author: "tester",
    category: "testCat",
    voteScore: 10,
    commentCount: 20
  };

  fetchMock.post(apiUrlPosts, post);

  return Api.addPost(post).then((response) => {
    expect(response).toEqual(post);
  });
});

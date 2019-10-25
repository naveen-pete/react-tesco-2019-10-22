import posts from '../../test-fixtures/posts';

export const getPosts = () => Promise.resolve(posts);
export const getPost = (id) => Promise.resolve(posts[0]);
export const addPost = (post) => Promise.resolve(post);
export const updatePost = (post) => Promise.resolve(post);

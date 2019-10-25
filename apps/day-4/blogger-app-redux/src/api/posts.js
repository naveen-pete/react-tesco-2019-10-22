const apiUrl = 'http://localhost:3001/posts';

export const getPosts = () => {
  return fetch(apiUrl)
    .then(response => response.json());
};

export const getPost = id => {
  return fetch(`${apiUrl}/${id}`)
    .then(response => response.json());
};

export const createPost = post => {
  return fetch(apiUrl, {
    method: 'POST',
    body: JSON.stringify(post),
    headers: { 'content-type': 'application/json' }
  })
    .then(response => response.json());
};

export const deletePost = id => {
  return fetch(`${apiUrl}/${id}`, { method: 'DELETE' })
    .then(response => response.json());
};

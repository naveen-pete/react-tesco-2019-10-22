const apiUrl = 'http://localhost:3001/categories';

export const getCategories = () => {
  return fetch(apiUrl)
    .then(response => response.json());
};

export const getCategory = id => {
  return fetch(`${apiUrl}/${id}`)
    .then(response => response.json());
};

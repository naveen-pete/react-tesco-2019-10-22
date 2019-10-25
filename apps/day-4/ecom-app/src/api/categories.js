const apiUrl = 'http://localhost:3000/api/categories';

export const getCategories = async () => {
  const response = await fetch(apiUrl);
  return response.json();
};

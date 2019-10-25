import { getAuthToken } from './storage';

const apiUrl = 'http://localhost:3000/api/users';

export const getUsers = async () => {
  const token = getAuthToken();
  const response = await fetch(apiUrl, {
    headers: {
      'x-auth-token': token
    }
  });
  const result = await response.json();
  if (response.status !== 200) {
    throw new Error(result.message);
  }
  return result;
};

export const registerUser = async user => {
  const response = await fetch(
    apiUrl, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user)
    }
  );

  return response.json();
};
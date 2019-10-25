const key = 'userInfo';

export const saveUserInfo = userInfo => {
  localStorage.setItem(key, JSON.stringify(userInfo));
};

export const getAuthToken = () => {
  const token = localStorage.getItem(key)
    ? JSON.parse(localStorage.getItem(key)).token
    : '';
  return token;
};

export const getUser = () => {
  const user = localStorage.getItem(key)
    ? JSON.parse(localStorage.getItem(key)).user
    : null;
  return user;
};

export const clearUserInfo = () => localStorage.clear();

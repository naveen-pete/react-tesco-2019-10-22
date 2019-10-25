export const setAuthInfo = authInfo => {
  return {
    type: 'SET_AUTH_INFO',
    payload: authInfo
  };
};

export const clearAuthInfo = () => {
  return {
    type: 'CLEAR_AUTH_INFO'
  };
}
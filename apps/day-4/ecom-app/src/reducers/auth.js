const defaultAuthInfo = {
  isAuthenticated: false,
  token: '',
  user: null
}

const authInfo = (state = { ...defaultAuthInfo }, action) => {
  switch (action.type) {
    case 'SET_AUTH_INFO':
      state = { ...action.payload, user: { ...action.payload.user } };
      return state;

    case 'CLEAR_AUTH_INFO':
      state = { ...defaultAuthInfo }
      return state;

    default:
      return state;
  };
};

export default authInfo;

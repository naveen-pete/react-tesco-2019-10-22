import { saveUserInfo, clearUserInfo } from './storage';

const apiUrl = 'http://localhost:3000/api/auth';

const login = async credentials => {
  const response = await fetch(
    apiUrl, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(credentials)
    }
  );

  return response.json();
};

class Auth {
  constructor() {
    this.isAuthenticated = false;
    this.token = '';
    this.user = null;
  }

  async authenticate(credentials) {
    try {
      const result = await login(credentials);
      if (!result.token) {
        throw new Error(result.message);
      }

      saveUserInfo(result);

      this.isAuthenticated = true;
      this.token = result.token;
      this.user = result.user;
    } catch (e) {
      console.log('Login failed.');
      console.log('Error:', e.message);
      throw e;
    }
  }

  signout() {
    clearUserInfo();

    this.isAuthenticated = false;
    this.token = '';
    this.user = null;
    console.log('Signout successful!');
  }
}

const auth = new Auth();

export default auth;

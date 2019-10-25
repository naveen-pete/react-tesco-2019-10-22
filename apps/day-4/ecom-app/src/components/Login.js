import React, { Component } from 'react';
import { connect } from 'react-redux';

import auth from '../api/auth';
import { setAuthInfo } from '../actions/auth';

class Login extends Component {
  state = {
    email: '',
    password: ''
  }

  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit = async event => {
    event.preventDefault();
    try {
      const credentials = { ...this.state };
      await auth.authenticate(credentials);

      const { isAuthenticated, token, user } = auth;
      this.props.setAuthInfo({ isAuthenticated, token, user });

      let pathname = '/';
      const { state } = this.props.location;
      if (state) {
        pathname = state.from.pathname;
      }

      this.props.history.push(pathname);
    } catch (e) {
      alert(e.message);
    }
  }

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <h3>Login</h3>
        <hr />
        <div className="card bg-light">
          <div className="card-body">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={this.handleChange}
                  autoComplete="off"
                />
              </div>
              <button type="submit" className="btn btn-primary mr-2">Login</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { setAuthInfo })(Login);

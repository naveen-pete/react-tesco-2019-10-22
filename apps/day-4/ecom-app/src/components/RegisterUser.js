import React, { Component } from 'react';
import { registerUser } from '../api/users';

class RegisterUser extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    isAdmin: false
  }

  handleChange = event => {
    const value = (event.target.id === 'isAdmin')
      ? event.target.checked
      : event.target.value;

    this.setState({ [event.target.id]: value });
  }

  handleSubmit = async event => {
    event.preventDefault();
    const user = { ...this.state };
    try {
      await registerUser(user);
      this.props.history.push('/login');
    } catch (e) {
      console.log('Register user failed.');
      console.log('Error:', e.message);
    }
  }

  render() {
    const { name, email, password, isAdmin } = this.state;
    return (
      <div>
        <h3>Register User</h3>
        <hr />
        <div className="card bg-light">
          <div className="card-body">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Enter user name"
                  value={name}
                  onChange={this.handleChange}
                />
              </div>
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
              <div className="form-group form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="isAdmin"
                  name="isAdmin"
                  value={isAdmin}
                  onChange={this.handleChange}
                />
                <label className="form-check-label" htmlFor="isAdmin">Admin User?</label>
              </div>
              <button type="submit" className="btn btn-primary mr-2">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default RegisterUser;

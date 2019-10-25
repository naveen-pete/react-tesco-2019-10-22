import React, { Component } from 'react';

import { getUsers } from '../api/users';

class Users extends Component {
  state = {
    users: []
  }

  async getUsers() {
    try {
      const users = await getUsers();
      this.setState({ users });
    } catch (e) {
      console.log('Get users failed.');
      console.log('Error:', e);
    }
  }

  componentDidMount() {
    this.getUsers();
  }

  renderUsers() {
    const { users } = this.state;
    return users.map(u => (
      <tr key={u._id}>
        <td>{u.name}</td>
        <td>{u.email}</td>
        <td className="text-center">{u.isAdmin ? 'Yes' : 'No'}</td>
      </tr>)
    );
  }

  render() {
    return (
      <div>
        <h3>Users</h3>
        <hr />
        <div>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th className="text-center">Name</th>
                <th className="text-center">Email</th>
                <th className="text-center">Admin User?</th>
              </tr>
            </thead>
            <tbody>
              {this.renderUsers()}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Users;

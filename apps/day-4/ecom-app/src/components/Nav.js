import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

import AuthNav from './AuthNav';

class Nav extends Component {
  render() {
    return (
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-secondary">
        <Link className="navbar-brand mb-0 h1" to="/">eCom App</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink activeClassName="active" exact className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassName="active" className="nav-link" to="/products">Products</NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassName="active" className="nav-link" to="/users">Users</NavLink>
            </li>
          </ul>
          <AuthNav />
        </div>
      </nav>
    );
  }
}

export default Nav;

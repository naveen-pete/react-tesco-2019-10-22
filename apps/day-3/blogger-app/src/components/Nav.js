import React from 'react';

const Nav = () => {
  return <ul className="nav nav-pills">
    <li className="nav-item">
      <a className="nav-link active" href="#">Home</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">Posts</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">New Post</a>
    </li>
  </ul>
};

export default Nav;

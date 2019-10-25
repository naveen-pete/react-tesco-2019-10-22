import React from 'react';
import FontAwesome from 'react-fontawesome';

const Header = () => {
  return (
    <nav className="navbar navbar-default navbar-fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand">
          <FontAwesome name="book" /> Blog App
        </a>
        <p className="navbar-text">(by Naveen Pete)</p>
      </div>
    </nav>
  );
};

export default Header;

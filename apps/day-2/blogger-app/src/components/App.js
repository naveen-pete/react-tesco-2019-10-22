import React from 'react';

import Header from './Header';
import Posts from './Posts';
import Footer from './Footer';
import Home from './Home';
import Nav from './Nav';

// ES6 / ES2015 - arrow function
const App = () => {
  return <div className="container">
    <Header />
    <Nav />
    <Home />
    <Posts />
    <Footer />
  </div>;
};

export default App;

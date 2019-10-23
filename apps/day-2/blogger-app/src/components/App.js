import React from 'react';

import Header from './Header';
import Posts from './Posts';
import Footer from './Footer';

// ES6 / ES2015 - arrow function
const App = () => {
  return <div className="container">
    <Header />
    <Posts />
    <Footer />
  </div>;
};

export default App;

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import Products from './Products';
import ProductForm from './ProductForm';
import ProductDetail from './ProductDetail';
import Users from './Users';
import RegisterUser from './RegisterUser';
import Login from './Login';
import PrivateRoute from './PrivateRoute';

// Function based component
const App = () => {
  return <div className="container">
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/products" component={Products} />
      <PrivateRoute exact path="/products/new" component={ProductForm} />
      <Route exact path="/products/:id" component={ProductDetail} />
      <PrivateRoute path="/products/:id/edit" component={ProductForm} />
      <PrivateRoute admin="true" path="/users" component={Users} />
      <Route path="/register" component={RegisterUser} />
      <Route path="/login" component={Login} />
    </Switch>
  </div>;
};

export default App;

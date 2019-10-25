import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import auth from '../api/auth';

const PrivateRoute = ({ component: Component, admin, ...rest }) => {
  const { isAuthenticated, user } = auth;
  let result = admin ? isAuthenticated && user.isAdmin : isAuthenticated;

  return <Route {...rest} render={(props) => (
    result === true
      ? <Component {...props} />
      : <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }} />
  )} />;

}

export default PrivateRoute;

import React from 'react';
import { connect } from 'react-redux';

const Home = (props) => {
  const name = props.user ? props.user.name : '';

  return <div>
    <h3>App Home</h3>
    <hr />
    <h4>Welcome {name}!</h4>
  </div>;
};

const mapStateToProps = ({ authInfo }) => ({ user: authInfo.user });
export default connect(mapStateToProps, null)(Home);

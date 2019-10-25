import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './Header';
import Posts from './Posts';
import Footer from './Footer';
import Home from './Home';
import Nav from './Nav';
import PostForm from './PostForm';
import PostDetail from './PostDetail';
import { getCategories } from '../redux/actions';

class App extends Component {
  // state = {
  //   categories: []
  // }

  componentDidMount() {
    // getCategories()
    //   .then(categories => this.setState({ categories }))
    //   .catch(error => {
    //     console.log('Get categories failed.');
    //     console.log('Error:', error);
    //   });

    this.props.getCategories();
  }

  render() {
    // const { categories } = this.state;

    return <div className="container">
      <Header />
      <Nav />

      <Switch>
        {/* http://localhost:3000/ */}
        <Route exact path="/" component={Home} />

        {/* http://localhost:3000/posts */}
        <Route exact path="/posts" component={Posts} />

        {/* http://localhost:3000/posts/create */}
        <Route exact path="/posts/create" render={(props) => {
          return <PostForm {...props} />
        }} />

        {/* http://localhost:3000/posts/2 */}
        <Route exact path="/posts/:id" component={PostDetail} />

      </Switch>

      <Footer />
    </div>;
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCategories: () => dispatch(getCategories())
  }
};

export default connect(null, mapDispatchToProps)(App);

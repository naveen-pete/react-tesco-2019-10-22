import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/common/header';
import PostsRoot from './components/posts/posts-root';
import PostDetail from './components/posts/post-detail';
import PostForm from './components/posts/post-form';

const App = (props) => {
  return (
    <div>
      <Header />
      <div className="container">
        <Switch>
          <Route path="/posts/new" component={PostForm} />
          <Route path="/posts/:id/edit" component={PostForm} />
          <Route path="/posts/:id" component={PostDetail} />
          <Route path="/" component={PostsRoot} />
        </Switch>
      </div>
    </div>
  );
};

export default App;

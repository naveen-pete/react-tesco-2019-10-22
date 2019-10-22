import React from 'react';

import { posts, categories } from '../store';
import Categories from './Categories';
import PostDetail from './PostDetail';

class Posts extends React.Component {

  handleCategorySelect = (category) => {
    console.log('selected category:', category);
  }

  render() {
    return <div className="row">
      <div className="col-12 col-md-4">
        <Categories
          categories={categories}
          onCategorySelect={this.handleCategorySelect}
        />
      </div>
      <div className="col-12 col-md-8">
        <h5>Posts</h5>
        {posts.map(post => <PostDetail key={post.id} post={post} />)}
      </div >
    </div>;
  }
}

export default Posts;

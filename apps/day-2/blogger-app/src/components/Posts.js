import React, { Component } from 'react';

import { posts, categories, categoryAll } from '../store';
import Categories from './Categories';
import PostDetail from './PostDetail';
import PostForm from './PostForm';

class Posts extends Component {

  // constructor() {
  //   super();

  //   this.state = {
  //     selectedCategory: categoryAll
  //   };
  // }

  state = {
    posts: posts,
    categories: categories,
    selectedCategory: categoryAll
  }

  handleCategorySelect = (category) => {
    // DO NOT UPDATE STATE DIRECTLY BY ASSIGNING A VALUE
    // this.state.selectedCategory = category;

    this.setState({
      selectedCategory: category
    });
  }

  handlePostCreate = (newPost) => {
    this.setState((prevState) => {
      return {
        posts: [...prevState.posts, newPost]
      }
    });
  }

  filterPosts = (allPosts) => {
    const selectedCategory = this.state.selectedCategory;
    const filteredPosts = selectedCategory.id === 'all'
      ? allPosts
      : allPosts.filter(p => p.category === selectedCategory.id);

    return filteredPosts;
  }

  render() {
    const { posts, categories } = this.state;
    const filteredPosts = this.filterPosts(posts);

    return <div className="row">
      <div className="col-12 col-md-3">
        <Categories
          categories={categories}
          onCategorySelect={this.handleCategorySelect}
        />
      </div>
      <div className="col-12 col-md-5">
        <h5>Posts</h5>
        {filteredPosts.length > 0
          ? filteredPosts.map(post => <PostDetail key={post.id} post={post} />)
          : <div className="alert alert-info">No posts for this category!</div>
        }
      </div >
      <div className="col-12 col-md-4">
        <PostForm
          categories={categories}
          onPostCreate={this.handlePostCreate}
        />
      </div>
    </div>;
  }
}

export default Posts;

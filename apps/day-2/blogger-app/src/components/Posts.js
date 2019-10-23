import React, { Component } from 'react';

import { categoryAll } from '../store';
import Categories from './Categories';
import PostDetail from './PostDetail';
import PostForm from './PostForm';
import { getPosts, createPost } from '../api/posts';
import { getCategories } from '../api/categories';

class Posts extends Component {

  constructor() {
    super();

    this.state = {
      posts: [],
      categories: [],
      selectedCategory: categoryAll
    };

  }

  componentDidMount() {
    getCategories()
      .then(categories => this.setState({ categories }))
      .catch(error => {
        console.log('Get categories failed.');
        console.log('Error:', error);
      });

    getPosts()
      .then(posts => this.setState({ posts }))
      .catch(error => {
        console.log('Get posts failed.');
        console.log('Error:', error);
      });
  }

  handleCategorySelect = (category) => {
    // DO NOT UPDATE STATE DIRECTLY BY ASSIGNING A VALUE
    // this.state.selectedCategory = category;

    this.setState({
      selectedCategory: category
    });
  }

  handlePostCreate = (newPost) => {
    createPost(newPost)
      .then(post => {
        this.setState((prevState) => {
          return {
            posts: [...prevState.posts, post]
          }
        });
      })
      .catch(error => {
        console.log('Create post failed.');
        console.log('Error:', error);
      })
  }

  filterPosts = (allPosts) => {
    const selectedCategory = this.state.selectedCategory;
    const filteredPosts = selectedCategory.id === 'all'
      ? allPosts
      : allPosts.filter(p => p.category === selectedCategory.id);

    return filteredPosts;
  }

  renderPosts(posts) {

    return <table className="table table-bordered table-hover">
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Author</th>
          <th scope="col">Category</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {posts.map(p => <tr key={p.id}>
          <td>{p.title}</td>
          <td>{p.author}</td>
          <td>{p.category}</td>
          <td>
            <div className="btn-group btn-group-sm">
              <a className="btn btn-info" href="#">View </a>
              <a className="btn btn-warning" href="#">Edit</a>
              <a className="btn btn-danger" href="#">Delete</a>
            </div>
          </td>
        </tr>)}

      </tbody>
    </table>;

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
      <div className="col-12 col-md-9">
        <h5>Posts</h5>
        {filteredPosts.length > 0
          ? this.renderPosts(filteredPosts)
          : <div className="alert alert-info">No posts for this category!</div>
        }
      </div>
      {/* <div className="col-12 col-md-4">
        <PostForm
          categories={categories}
          onPostCreate={this.handlePostCreate}
        />
      </div> */}
    </div>;
  }
}

export default Posts;

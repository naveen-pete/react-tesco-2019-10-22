import React, { Component } from 'react';

import { getPost } from '../api/posts';
import { getCategory } from '../api/categories';

class PostDetail extends Component {
  state = {
    post: {
      title: '',
      body: '',
      author: '',
      category: ''
    },
    category: {
      id: '',
      name: ''
    }
  }

  componentDidMount() {
    getPost(this.props.match.params.id)
      .then(post => {
        this.setState({ post });
        return getCategory(post.category);
      })
      .then(category => this.setState({ category }))
      .catch(error => {
        console.log('Get post / category failed.');
        console.log('Error:', error);
      });
  }

  render() {
    const { title, body, author } = this.state.post;
    const { name: category } = this.state.category;

    return (
      <div className="card bg-light mb-3">
        <div className="card-header">
          <h5>
            {title}
          </h5>
        </div>
        <div className="card-body">
          <p className="card-text">
            {body}
          </p>
          <p className="card-text">Author: <em>
            {author}
          </em></p>
          <p className="card-text">Category: <em>
            {category}
          </em></p>
        </div>
        <div className="card-footer">
          <button className="btn btn-sm btn-outline-primary mr-1" type="button">Edit</button>
          <button className="btn btn-sm btn-outline-danger" type="button">Delete</button>
        </div>
      </div>
    );

  }
}

export default PostDetail;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { categoryAll } from '../store';
import Categories from './Categories';
import { getPosts } from '../redux/actions';


class Posts extends Component {

  constructor() {
    super();

    this.state = {
      selectedCategory: categoryAll
    };

  }

  componentDidMount() {
    this.props.getPosts();
  }

  handleCategorySelect = (category) => {
    this.setState({
      selectedCategory: category
    });
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
              <Link className="btn btn-info" to={`/posts/${p.id}`}>View </Link>
              <a className="btn btn-warning" href="#">Edit</a>
              <a className="btn btn-danger" href="#">Delete</a>
            </div>
          </td>
        </tr>)}

      </tbody>
    </table>;

  }

  render() {
    const { posts } = this.props;
    const filteredPosts = this.filterPosts(posts);

    return <div className="row">
      <div className="col-12 col-md-3">
        <Categories
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
    </div>;
  }
}

const mapStateToProps = ({ posts }) => {
  return {
    posts
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: () => dispatch(getPosts())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);

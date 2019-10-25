import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import PostListItem from './post-list-item';
import AppAlert from '../common/app-alert';

import { getPosts } from '../../actions/posts';

export class PostList extends Component {
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    const { posts, currentCategory } = this.props;

    const filteredPosts =
      currentCategory.code === 'all'
        ? posts
        : posts.filter(post => post.category === currentCategory.code);

    return (
      <div className="col-sm-9">
        <div className="pull-right">
          <Link to="/posts/new" className="btn btn-sm btn-primary">
            <span className="glyphicon glyphicon-plus" /> New Post
          </Link>
        </div>
        <h4>
          <FontAwesome name="envelope" /> Posts (Category:{' '}
          <span id="category">{currentCategory.name}</span>)
        </h4>
        {filteredPosts.length > 0 ? (
          filteredPosts.map(post => <PostListItem key={post.id} post={post} />)
        ) : (
            <AppAlert
              type="info"
              message="No posts available for selected category."
            />
          )}
      </div>
    );
  }
}

const mapStateToProps = ({ posts, currentCategory }) => ({
  posts,
  currentCategory
});

const mapDispatchToProps = dispatch => ({
  getPosts: () => dispatch(getPosts())
});

export default connect(mapStateToProps, mapDispatchToProps)(PostList);

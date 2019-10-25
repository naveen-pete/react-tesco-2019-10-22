import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import AppAlert from '../common/app-alert';

import { getPost, deletePost } from '../../actions/posts';

class PostDetail extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getPost(id);
  }

  deletePost(id) {
    this.props.deletePost(id, () => this.props.history.push('/'));
  }

  render() {
    const { post } = this.props;

    if (!post) {
      return <AppAlert type="info" message="Loading..." />;
    }

    return (
      <div className="row">
        <div className="col-sm-12">
          <div className="row">
            <div className="col-sm-12">
              <h4>
                <FontAwesome name="envelope" /> Post Detail
              </h4>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <Link to="/" className="btn btn-sm btn-primary smallMargin">
                <span className="glyphicon glyphicon-chevron-left" /> Posts
              </Link>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-sm-12">
              <div className="panel panel-info">
                <div className="panel-heading">
                  <h3 className="panel-title">
                    <FontAwesome name="envelope" /> {post.title}
                  </h3>
                </div>
                <div className="panel-body">
                  <p>{post.body}</p>
                </div>
                <ul className="list-group">
                  <li className="list-group-item">
                    <FontAwesome name="user" /> Author: {post.author}
                  </li>
                  <li className="list-group-item">
                    <FontAwesome name="object-group" /> Category:{' '}
                    {post.category}
                  </li>
                  <li className="list-group-item">
                    <FontAwesome name="comments-o" /> {post.commentCount}{' '}
                    comment(s)
                  </li>
                  <li className="list-group-item">{post.voteScore} like(s)</li>
                </ul>
                <div className="panel-footer">
                  <Link
                    to={`/posts/${post.id}/edit`}
                    className="btn btn-primary btn-sm smallMargin"
                  >
                    <span className="glyphicon glyphicon-edit" /> Edit
                  </Link>
                  <button
                    onClick={() => this.deletePost(post.id)}
                    className="btn btn-warning btn-sm smallMargin"
                  >
                    <span className="glyphicon glyphicon-trash" /> Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ posts }, props) => ({
  post: posts.find(post => post.id === props.match.params.id)
});

const mapDispatchToProps = dispatch => ({
  getPost: id => dispatch(getPost(id)),
  deletePost: (id, callback) => dispatch(deletePost(id, callback))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);

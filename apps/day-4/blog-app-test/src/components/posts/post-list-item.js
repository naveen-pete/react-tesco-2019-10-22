import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getFormattedDate } from '../../helpers';

import { deletePost } from '../../actions/posts';

const PostListItem = props => {
  const { post } = props;

  return (
    <div className="panel panel-info">
      <div className="panel-heading">
        <FontAwesome name="envelope" /> {post.title}
      </div>
      <div className="panel-body">
        <div className="row">
          <div className="col-sm-8">
            <FontAwesome name="user" /> {post.author}
          </div>
          <div className="col-sm-4">
            <FontAwesome name="object-group" /> {post.category}
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <FontAwesome name="comments-o" /> {post.commentCount} comment(s)
          </div>
          <div className="col-sm-4">{post.voteScore} like(s)</div>
          <div className="col-sm-4">
            <FontAwesome name="clock-o" /> {getFormattedDate(post.timestamp)}
          </div>
        </div>
      </div>
      <div className="panel-footer">
        <Link
          to={`/posts/${post.id}`}
          className="btn btn-xs btn-info smallMargin"
        >
          <FontAwesome name="envelope-open-o" /> View
        </Link>
        <Link
          to={`/posts/${post.id}/edit`}
          className="btn btn-xs btn-primary smallMargin"
        >
          <span className="glyphicon glyphicon-edit" /> Edit
        </Link>
        <button
          onClick={() => props.deletePost(post.id)}
          className="btn btn-xs btn-warning smallMargin"
        >
          <span className="glyphicon glyphicon-trash" /> Delete
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  deletePost: id => dispatch(deletePost(id))
});

export { PostListItem };
export default connect(null, mapDispatchToProps)(PostListItem);

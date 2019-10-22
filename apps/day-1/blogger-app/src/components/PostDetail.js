import React from 'react';

const PostDetail = (props) => {
  return (
    <div className="card bg-light mb-3">
      <div className="card-header">
        <h5>
          {props.post.title}
        </h5>
      </div>
      <div className="card-body">
        <p className="card-text">
          {props.post.body}
        </p>
        <p className="card-text">Author: <em>
          {props.post.author}
        </em></p>
        <p className="card-text">Category: <em>
          {props.post.category}
        </em></p>
      </div>
      <div className="card-footer">
        <button className="btn btn-sm btn-outline-primary mr-1" type="button">Edit</button>
        <button className="btn btn-sm btn-outline-danger" type="button">Delete</button>
      </div>
    </div>
  );
};

export default PostDetail;

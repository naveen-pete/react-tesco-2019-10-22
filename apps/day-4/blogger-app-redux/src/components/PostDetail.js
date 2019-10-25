import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getOnePost } from "../redux/actions";

class PostDetail extends Component {

  componentDidMount() {
    this.props.getOnePost(this.props.match.params.id);
  }

  render() {
    const { title, body, author, category: categoryId } = this.props.post;
    const { name: category } = this.props.categories.find(c => c.id === categoryId);

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

const mapStateToProps = ({ posts, categories }, ownProps) => {
  return {
    post: posts.find(p => p.id === parseInt(ownProps.match.params.id)),
    categories
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getOnePost: id => dispatch(getOnePost(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);

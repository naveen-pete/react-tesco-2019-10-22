import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import {
  getCategories,
  getPost,
  createPost,
  updatePost
} from '../../actions/posts';

const defaultPost = {
  title: '',
  body: '',
  author: '',
  category: '',
  commentCount: 0,
  voteScore: 0,
  timestamp: 0
};

export class PostForm extends Component {
  constructor() {
    super();

    this.state = {
      post: defaultPost
    };

    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.getCategories();
    const id = this.props.match.params.id;
    if (id) {
      this.props.getPost(id, post => {
        this.setState({ post });
      });
    }
  }

  onFormSubmit(event) {
    event.preventDefault();

    // #1: older style - using Object.assign() method
    // const post = Object.assign({}, this.state.post);

    // #2: newer style - using object destructuring syntax
    const post = { ...this.state.post };
    const callback = () => this.props.history.push('/');

    if (post.id) {
      this.props.updatePost(post, callback);
    } else {
      post.timestamp = Date.now();
      this.props.createPost(post, callback);
    }
  }

  handleChange(event) {
    // Retrieve name, value and control type flag of the form control
    const { name, value } = event.target;

    this.setState(prevState => {
      // Assign the updated value
      // #1: older style - using Object.assign() method
      // const newPost = Object.assign({}, prevState.post, { [name]: value });

      // #2: newer style - using object destructuring syntax
      const newPost = {
        ...prevState.post,
        [name]: value
      };

      return { post: newPost };
    });
  }

  render() {
    const { post } = this.state;
    const { categories } = this.props;

    return (
      <div className="row">
        <div className="col-sm-12">
          <h4>
            <FontAwesome name="envelope" /> Post Form
          </h4>
          <div className="well well-lg">
            <form onSubmit={this.onFormSubmit}>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  required
                  type="text"
                  className="form-control"
                  id="title"
                  name="title"
                  value={post.title}
                  onChange={this.handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="body">Body</label>
                <textarea
                  required
                  className="form-control"
                  id="body"
                  name="body"
                  cols="30"
                  rows="4"
                  value={post.body}
                  onChange={this.handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="author">Author</label>
                <input
                  required
                  type="text"
                  className="form-control"
                  id="author"
                  name="author"
                  value={post.author}
                  onChange={this.handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="category">Category</label>
                <select
                  required
                  className="form-control"
                  id="category"
                  name="category"
                  value={post.category}
                  onChange={this.handleChange}
                >
                  <option value="" />
                  {categories.map(({ code, name }) => (
                    <option key={code} value={code}>
                      {name}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-sm smallMargin"
              >
                <span className="glyphicon glyphicon-ok" /> Save
              </button>
              <Link to="/" className="btn btn-warning btn-sm smallMargin">
                <span className="glyphicon glyphicon-remove" /> Cancel
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ categories }, props) => ({
  categories
});

const mapDispatchToProps = dispatch => ({
  getCategories: () => dispatch(getCategories()),
  getPost: (id, callback) => dispatch(getPost(id, callback)),
  createPost: (post, callback) => dispatch(createPost(post, callback)),
  updatePost: (post, callback) => dispatch(updatePost(post, callback))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);

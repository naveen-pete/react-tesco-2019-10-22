import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import * as Actions from '../actions/products';
import { getCategories } from '../actions/categories';

class ProductForm extends React.Component {
  state = {
    _id: null,
    name: '',
    description: '',
    price: 0,
    imageUrl: '',
    category: ''
  }

  componentDidMount() {
    const id = this.props.match.params.id;

    if (id) {
      this.getProduct(id);
    }
    this.props.getCategories();
  }

  getProduct(id) {
    this.props.getProduct(id);
    const { _id, name, description, price, imageUrl, category: { _id: category } } = this.props.product;
    this.setState({ _id, name, description, price, imageUrl, category });
  }

  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  }

  addProduct(product) {
    this.props.addProduct(product);
    this.props.history.push('/products');
  }

  updateProduct(id, product) {
    this.props.updateProduct(id, product);
    this.props.history.push('/products');
  }

  handleSubmit = event => {
    event.preventDefault();

    const { _id, name, description, price, imageUrl, category } = this.state;
    const product = { name, description, price, imageUrl, category };
    product.price = parseInt(product.price);

    if (!_id) {
      this.addProduct(product);
    } else {
      this.updateProduct(_id, product);
    }
  }

  render() {
    const { name, description, price, imageUrl, category } = this.state;
    const { categories } = this.props;

    return (
      <div>
        <h3>Product Form</h3>
        <hr />
        <div className="card bg-light">
          <div className="card-body">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Enter product name"
                  value={name}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                  className="form-control"
                  rows="5"
                  id="description"
                  name="description"
                  placeholder="Enter description"
                  value={description}
                  onChange={this.handleChange}
                ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="price">Price</label>
                <input
                  type="text"
                  className="form-control"
                  id="price"
                  name="price"
                  placeholder="Enter price"
                  value={price}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="imageUrl">Image URL</label>
                <input
                  type="text"
                  className="form-control"
                  id="imageUrl"
                  name="imageUrl"
                  placeholder="Enter image URL"
                  value={imageUrl}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="category">Category</label>
                <select
                  className="form-control"
                  id="category"
                  name="category"
                  value={category}
                  onChange={this.handleChange}
                >
                  <option value="">- Select -</option>
                  {categories.map(c => <option key={c._id} value={c._id}>{c.name}</option>)}
                </select>
              </div>
              <button type="submit" className="btn btn-primary mr-2">Submit</button>
              <Link className="btn btn-warning" to="/products">
                Cancel
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ categories, products }, ownProps) => ({
  categories,
  product: products.find(p => p._id === ownProps.match.params.id)
});

const mapDispatchToProps = dispatch => ({
  addProduct: product => dispatch(Actions.addProduct(product)),
  getCategories: () => dispatch(getCategories()),
  getProduct: id => dispatch(Actions.getProduct(id)),
  updateProduct: (id, product) => dispatch(Actions.updateProduct(id, product)),
  deleteProduct: id => dispatch(Actions.deleteProduct(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductForm);

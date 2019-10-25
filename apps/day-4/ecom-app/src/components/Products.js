import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Categories, { all } from './Categories';
import { deleteProduct, getProducts } from '../actions/products';
import auth from '../api/auth';

class Products extends React.Component {
  constructor() {
    super();

    this.state = {
      selectedCategory: all
    };
  }

  componentDidMount() {
    this.props.getProducts();
  }

  handleCategorySelect = (category) => {
    this.setState({ selectedCategory: category });
  }

  renderProducts(products) {
    return products.map(p => (
      <tr key={p._id}>
        <td>{p.name}</td>
        <td className="text-right">{p.price}</td>
        <td className="text-center">{p.category.name}</td>
        <td className="text-center">
          <div className="btn-group btn-group-sm">
            <Link className="btn btn-info" to={`/products/${p._id}`}>
              View
            </Link>
            <Link className="btn btn-primary" to={`/products/${p._id}/edit`} >
              Edit
            </Link>
            {auth.isAuthenticated && auth.user.isAdmin && (
              <button className="btn btn-warning" onClick={() => {
                if (window.confirm('Are you sure?')) {
                  this.props.deleteProduct(p._id);
                }
              }}>
                Delete
            </button>
            )}
          </div>
        </td>
      </tr>
    ));
  }

  render() {
    const { selectedCategory } = this.state;
    const { products } = this.props;
    let filteredProducts = selectedCategory._id === 'all'
      ? products
      : products.filter(p => p.category._id === selectedCategory._id);

    return (
      <div className="row">
        <div className="col-md-12">
          <h3>Products</h3>
          <hr />
          <Link to="/products/new" className="btn btn-primary">New</Link>
          <br />
          <br />
          <Categories onCategorySelect={this.handleCategorySelect} />
          <br />
          <div>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th className="text-center">Name</th>
                  <th className="text-center">Price</th>
                  <th className="text-center">Category</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {this.renderProducts(filteredProducts)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ products }) => ({ products });

const mapDispatchToProps = dispatch => ({
  getProducts: () => dispatch(getProducts()),
  deleteProduct: id => dispatch(deleteProduct(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Products);

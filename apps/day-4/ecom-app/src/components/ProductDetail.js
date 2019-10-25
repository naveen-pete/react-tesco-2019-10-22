import React, { Component } from 'react';

import { getProduct } from '../api/products';

const cardStyle = { width: "18rem" };

const imageStyle = {
  height: 300, weight: 300, objectFit: "contain"
}

class ProductDetail extends Component {

  state = {
    product: null
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.getProduct(id);
  }

  async getProduct(id) {
    try {
      const product = await getProduct(id);
      this.setState({ product });
    } catch (e) {
      console.log('Get product failed.');
      console.log('Error:', e);
    }
  }

  render() {
    if (!this.state.product) {
      return <div>Loading product details...</div>
    }

    const { name, description, price, imageUrl, category } = this.state.product;
    return (
      <div>
        <h3>Product Details </h3>
        <hr />
        <div className="card border-secondary mb-3" style={cardStyle}>
          <img src={imageUrl} className="card-img-top" alt={name} style={imageStyle}></img>
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{description}</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Price: {price}</li>
            <li className="list-group-item">Category: {category.name}</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default ProductDetail;

import React from 'react';

import ProductDetail from './ProductDetail';
import Categories, { all } from './Categories';
import ProductForm from './ProductForm';
import { getProducts, addProduct } from '../api/products';

class Products extends React.Component {
  constructor() {
    super();

    // this.handleCategorySelect = this.handleCategorySelect.bind(this);

    this.state = {
      products: [],
      selectedCategory: all
    };
  }

  componentDidMount() {
    this.getProducts();
  }

  handleCategorySelect = (category) => {
    this.setState({ selectedCategory: category });
  }

  async getProducts() {
    try {
      const products = await getProducts();
      this.setState({ products });
    } catch (e) {
      console.log('Get products failed.');
      console.log('Error:', e);
    }
  }

  handleProductAdd = async product => {
    try {
      await addProduct(product);
      this.getProducts();
    } catch (e) {
      console.log('Add product failed.');
      console.log('Error:', e);
    }
  }

  render() {
    const { products, selectedCategory } = this.state;
    let filteredProducts = selectedCategory._id === 'all'
      ? products
      : products.filter(p => p.category._id === selectedCategory._id);

    return (
      <div className="row">
        <div className="col-md-3">
          <Categories onCategorySelect={this.handleCategorySelect} />
        </div>
        <div className="col-md-4">
          {filteredProducts.map(p => {
            return <ProductDetail key={p._id} product={p} />;
          })}
        </div>
        <div className="col-md-5">
          <ProductForm onProductAdd={this.handleProductAdd} />
        </div>
      </div>
    );
  }

}

export default Products;

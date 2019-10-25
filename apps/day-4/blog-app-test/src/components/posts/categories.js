import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

import { connect } from 'react-redux';

import { CATEGORY_ALL } from './defaults';
import { getCategories, setCurrentCategory } from '../../actions/posts';

export class Categories extends Component {
  componentDidMount() {
    this.props.getCategories();
  }

  onCategoryClick(selectedCategory) {
    this.props.setCurrentCategory(selectedCategory);
  }

  addActiveIfSelected(category) {
    const { code } = this.props.currentCategory;
    return code === category.code ? 'active' : '';
  }

  render() {
    let { categories } = this.props;
    categories = [CATEGORY_ALL, ...categories];

    return (
      <div className="col-sm-3">
        <h4>
          <FontAwesome name="object-group" /> Category
        </h4>
        <ul className="list-group">
          {categories.map(category => (
            <li
              onClick={() => this.onCategoryClick(category)}
              key={category.code}
              className={`list-group-item cursorPointer ${this.addActiveIfSelected(category)}`}
            >
              {category.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ categories, currentCategory }) => ({
  categories,
  currentCategory
});

const mapDispatchToProps = dispatch => ({
  getCategories: () => dispatch(getCategories()),
  setCurrentCategory: category => dispatch(setCurrentCategory(category))
});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);

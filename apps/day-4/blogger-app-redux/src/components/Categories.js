import React from 'react';
import { connect } from 'react-redux';

import { categoryAll } from '../store';
import { selectCategory } from '../redux/actions';

const Categories = ({ categories, selectCategory }) => {
  const categoriesWithAll = [categoryAll, ...categories];
  return <div>
    <h5>Categories</h5>
    <ul className="list-group">
      {categoriesWithAll.map(c => <li
        key={c.id}
        className="list-group-item"
        onClick={() => { selectCategory(c) }}
      >{c.name}</li>)}
    </ul>
  </div>
};

const mapStateToProps = ({ categories }) => {
  return {
    categories
  }
}

const mapDispatchToProps = dispatch => {
  return {
    selectCategory: (selectedCategory) => dispatch(selectCategory(selectedCategory))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);

import React from 'react';
import { connect } from 'react-redux';

import { getCategories } from '../actions/categories';

export const all = { _id: 'all', name: 'All' };

class Categories extends React.Component {
  componentDidMount() {
    this.props.getCategories();
  }

  handleCategorySelect = e => {
    const category = this.props.categories.find(c => c._id === e.target.value);
    this.props.onCategorySelect(category);
  }

  render() {
    const { categories } = this.props;

    return <select className="form-control" onChange={this.handleCategorySelect}>
      {categories.map(c => (
        <option
          value={c._id}
          key={c._id}
        >
          {c.name}
        </option>
      ))}
    </select>
  }
}

const mapStateToProps = ({ categories }) => ({ categories: [all, ...categories] });

const mapDispatchToProps = dispatch => ({
  getCategories: () => dispatch(getCategories())
});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);

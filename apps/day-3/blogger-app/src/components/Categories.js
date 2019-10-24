import React from 'react';

import { categoryAll } from '../store';

const Categories = ({ categories, onCategorySelect }) => {
  const categoriesWithAll = [categoryAll, ...categories];
  return <div>
    <h5>Categories</h5>
    <ul className="list-group">
      {categoriesWithAll.map(c => <li
        key={c.id}
        className="list-group-item"
        onClick={() => { onCategorySelect(c) }}
      >{c.name}</li>)}
    </ul>
  </div>
};

export default Categories;

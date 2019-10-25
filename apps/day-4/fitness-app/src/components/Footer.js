import React from 'react';
import { Paper, Tabs, Tab } from '@material-ui/core';

const Footer = ({ categories, onCategorySelect, category }) => {
  const handleChange = (e, index) => {
    const category = index === 0 ? '' : categories[index - 1];
    onCategorySelect(category);
  };

  const index = category
    ? categories.findIndex(c => c === category) + 1
    : 0;

  return <Paper>
    <Tabs
      value={index}
      indicatorColor="primary"
      textColor="primary"
      centered
      onChange={handleChange}
    >
      <Tab label="All" />
      {categories.map(c => <Tab key={c} label={c} />)}
    </Tabs>
  </Paper>;
}

export default Footer;

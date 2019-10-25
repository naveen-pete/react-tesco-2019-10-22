import React from 'react';
import { shallow } from 'enzyme';
import { Categories } from './categories';
import categories from '../../test-fixtures/categories';

let currentCategory, getCategoriesSpy, setCurrentCategorySpy;

beforeEach(() => {
  currentCategory = {
    code: 'react',
    name: 'React'
  };

  getCategoriesSpy = jest.fn();
  setCurrentCategorySpy = jest.fn();
});

test('should render categories component properly', () => {
  const wrapper = shallow(
    <Categories 
      currentCategory={currentCategory}
      categories={categories} 
      getCategories={getCategoriesSpy}
    />
  );
  expect(wrapper).toMatchSnapshot();
});

test('should render the list of categories', () => {
  const wrapper = shallow(
    <Categories 
      currentCategory={currentCategory}
      categories={categories} 
      getCategories={getCategoriesSpy}
    />
  );

  expect(wrapper).toMatchSnapshot();
  const items = wrapper.find('li');
  expect(items).toHaveLength(categories.length + 1);
});

test('should render the list of categories', () => {
  const wrapper = shallow(
    <Categories 
      currentCategory={currentCategory}
      categories={categories} 
      getCategories={getCategoriesSpy}
    />
  );

  expect(wrapper).toMatchSnapshot();
  const items = wrapper.find('li');
  categories.forEach((category, i) => {
    expect(items.at(i + 1).text()).toBe(category.name);
  });
});

test('should set current category when clicked', () => {
  const wrapper = shallow(
    <Categories 
      currentCategory={currentCategory}
      categories={categories} 
      getCategories={getCategoriesSpy}
      setCurrentCategory={setCurrentCategorySpy}
    />
  );

  expect(wrapper).toMatchSnapshot();
  wrapper.find('li').at(2).simulate('click');
  expect(setCurrentCategorySpy).toHaveBeenCalledWith(categories[1]);
});

test('should set \'active\' css class to currently selected category', () => {
  const wrapper = shallow(
    <Categories 
      currentCategory={currentCategory}
      categories={categories} 
      getCategories={getCategoriesSpy}
      setCurrentCategory={setCurrentCategorySpy}
    />
  );

  expect(wrapper).toMatchSnapshot();
  expect(wrapper.find('li.active').text()).toBe(currentCategory.name);
});

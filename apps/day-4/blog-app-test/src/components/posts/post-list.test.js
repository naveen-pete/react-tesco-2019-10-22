import React from 'react';
import { shallow } from 'enzyme';
import { PostList } from './post-list';
import posts from '../../test-fixtures/posts';
import { CATEGORY_ALL } from './defaults';

test('should render posts', () => {
  const wrapper = shallow(<PostList posts={posts} currentCategory={CATEGORY_ALL} getPosts={() => {}} />);
  expect(wrapper.find('Connect(PostListItem)')).toHaveLength(posts.length);
  expect(wrapper).toMatchSnapshot();
});

test('should render a message when posts array is empty', () => {
  const wrapper = shallow(<PostList posts={[]} currentCategory={CATEGORY_ALL} getPosts={() => {}} />);
  expect(wrapper.find('AppAlert')).toHaveLength(1);
  expect(wrapper).toMatchSnapshot();
});

test('should render posts for a particular category', () => {
  const category = {
    code: 'redux',
    name: 'Redux'
  }
  const wrapper = shallow(<PostList posts={posts} currentCategory={category} getPosts={() => {}} />);
  expect(wrapper.find('Connect(PostListItem)')).toHaveLength(2);
  expect(wrapper).toMatchSnapshot();
});

test('should render the name of category passed as a prop', () => {
  const category = {
    code: 'redux',
    name: 'Redux'
  }
  const wrapper = shallow(<PostList posts={posts} currentCategory={category} getPosts={() => {}} />);
  expect(wrapper.find('#category').text()).toBe(category.name);
});

test('should retrieve posts when the component is mounted', () => {
  const getPostsSpy = jest.fn();
  const wrapper = shallow(
    <PostList 
      posts={posts} 
      currentCategory={CATEGORY_ALL} 
      getPosts={getPostsSpy} 
    />
  );

  expect(getPostsSpy).toBeCalled();
});

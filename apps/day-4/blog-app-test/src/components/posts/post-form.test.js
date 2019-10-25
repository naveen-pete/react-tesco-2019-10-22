import React from 'react';
import { shallow } from 'enzyme';
import { PostForm } from './post-form';
import categories from '../../test-fixtures/categories';

let realDateNow, mockDateNow, match, defaultPost, getCategoriesSpy, 
  getPostSpy, createPostSpy, updatePostSpy;

beforeEach(() => {
  match = {
    params: { id: undefined }
  };

  defaultPost = {
    title: '',
    body: '',
    author: '',
    category: '',
    commentCount: 0,
    voteScore: 0,
    timestamp: 0
  };

  getCategoriesSpy = jest.fn();
  getPostSpy = jest.fn();
  createPostSpy = jest.fn();
  updatePostSpy = jest.fn();

  realDateNow = Date.now;
  mockDateNow = jest.fn().mockImplementation(() => 123);
  Date.now = mockDateNow;
});

afterEach(() => {
  Date.now = realDateNow;
});

test('should render the form', () => {
  const wrapper = shallow(
    <PostForm 
      match={match}
      categories={categories}
      getPost={getPostSpy} 
      getCategories={getCategoriesSpy} 
    />
  );
  expect(wrapper).toMatchSnapshot();
});

test('should populate categories within Category dropdown list', () => {
  const wrapper = shallow(
    <PostForm 
      match={match}
      categories={categories}
      getPost={getPostSpy} 
      getCategories={getCategoriesSpy} 
    />
  );
  expect(wrapper).toMatchSnapshot();
  expect(wrapper.find('#category > option').length).toBe(categories.length + 1);
});

test('should call getCategories() when the component is mounted', () => {
  const wrapper = shallow(
    <PostForm 
      match={match}
      categories={categories}
      getPost={getPostSpy} 
      getCategories={getCategoriesSpy} 
    />
  );
  expect(wrapper).toMatchSnapshot();
  expect(getCategoriesSpy).toHaveBeenCalled();
});

test('should set state to default post when the component is mounted', () => {
  const wrapper = shallow(
    <PostForm 
      match={match}
      categories={categories}
      getPost={getPostSpy} 
      getCategories={getCategoriesSpy} 
    />
  );
  expect(wrapper).toMatchSnapshot();
  // #1
  // expect(wrapper.state('post')).toEqual(defaultPost);

  // #2
  expect(wrapper.state().post).toEqual(defaultPost);
});

test('should call getPost() when the component is mounted and post id is passed as a parameter', () => {
  const id = 1;
  match.params.id = id;

  const wrapper = shallow(
    <PostForm 
      match={match}
      categories={categories}
      getPost={getPostSpy} 
      getCategories={getCategoriesSpy} 
    />
  );
  expect(wrapper).toMatchSnapshot();
  expect(getCategoriesSpy).toHaveBeenCalled();
  expect(getPostSpy).toHaveBeenCalledWith(id, expect.any(Function));
});

test('should save post title in state when the value in title text box is changed', () => {
  const name = 'title';
  const value = 'my test post';

  const event = { 
    target: { name, value }
  };

  const wrapper = shallow(
    <PostForm 
      match={match}
      categories={categories}
      getPost={getPostSpy} 
      getCategories={getCategoriesSpy} 
    />
  );

  expect(wrapper).toMatchSnapshot();

  wrapper.find('#title').simulate('change', event);
  const statePost =  wrapper.state('post');
  expect(statePost.title).toBe(value);
});

test('should save post body in state when the value in body text area is changed', () => {
  const name = 'body';
  const value = 'my test post body';

  const event = { 
    target: { name, value }
  };

  const wrapper = shallow(
    <PostForm 
      match={match}
      categories={categories}
      getPost={getPostSpy} 
      getCategories={getCategoriesSpy} 
    />
  );

  expect(wrapper).toMatchSnapshot();

  wrapper.find('#body').simulate('change', event);
  const statePost =  wrapper.state('post');
  expect(statePost.body).toBe(value);
});

test('should save selected category in state when a category is selected', () => {
  const name = 'category';
  const value = 'testCat';

  const event = { 
    target: { name, value }
  };

  const wrapper = shallow(
    <PostForm 
      match={match}
      categories={categories}
      getPost={getPostSpy} 
      getCategories={getCategoriesSpy} 
    />
  );

  expect(wrapper).toMatchSnapshot();

  wrapper.find('#category').simulate('change', event);
  const statePost =  wrapper.state('post');
  expect(statePost.category).toBe(value);
});

test('should add a post when the form is submitted', () => {
  const post = {
    title: 'test post',
    body: 'test post body',
    author: 'test author',
    category: 'testCat',
    commentCount: 1,
    voteScore: 2,
    timestamp: 123
  };

  const event = { 
    preventDefault: jest.fn() 
  };

  const wrapper = shallow(
    <PostForm 
      match={match}
      categories={categories}
      getCategories={getCategoriesSpy} 
      createPost={createPostSpy}
    />
  );

  expect(wrapper).toMatchSnapshot();

  wrapper.setState({post}, () => {
    wrapper.find('form').simulate('submit', event);
    expect(event.preventDefault).toHaveBeenCalled();
    expect(mockDateNow).toHaveBeenCalled();
    expect(createPostSpy).toHaveBeenCalledWith(post, expect.any(Function));
  });
});

test('should update a post when the form is submitted', () => {
  const post = {
    id: 2,
    title: 'test post',
    body: 'test post body',
    author: 'test author',
    category: 'testCat',
    commentCount: 1,
    voteScore: 2,
    timestamp: 123
  };

  const event = { 
    preventDefault: jest.fn() 
  };

  const wrapper = shallow(
    <PostForm 
      match={match}
      categories={categories}
      getCategories={getCategoriesSpy} 
      updatePost={updatePostSpy}
    />
  );

  expect(wrapper).toMatchSnapshot();

  wrapper.setState({post}, () => {
    wrapper.find('form').simulate('submit', event);
    expect(event.preventDefault).toHaveBeenCalled();
    expect(updatePostSpy).toHaveBeenCalledWith(post, expect.any(Function));
  });
});

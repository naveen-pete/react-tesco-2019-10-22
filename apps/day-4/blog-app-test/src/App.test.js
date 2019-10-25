import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import {shallow} from 'enzyme'; 
import App from './App';

test('should render App correctly (using react-test-renderer)', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<App />);
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});

test('should render App correctly (using enzyme)', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();
});

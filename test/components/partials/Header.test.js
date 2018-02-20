import React from 'react';
import { shallow } from 'enzyme';

import { Link } from 'react-router-dom';
import Header from '../../../src/components/partials/Header';

it('renders without crashing', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper.find('header').length).toBe(1);
});

it('links to root from the logo', () => {
  const wrapper = shallow(<Header />);

  const link = wrapper.find(Link);

  expect(link.props().to).toBe('/');
  expect(link.find('img').length).toBe(1);
});

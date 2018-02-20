import React from 'react';
import { shallow } from 'enzyme';

import { Switch } from 'react-router-dom';

import Root from '../../src/routes/Root/view';

it('renders without crashing', () => {
  const wrapper = shallow(<Root />);
  expect(wrapper.find(Switch).length).toBe(1);
});

import React from 'react';
import { shallow } from 'enzyme';

import Star from '../../../src/components/icons/Star';
import RatingDisplay from '../../../src/components/partials/RatingDisplay';

const reqProps = {
  rating: 2,
  starSize: { all: 4 },
};

it('renders without crashing', () => {
  const wrapper = shallow(<RatingDisplay {...reqProps} />);
  expect(wrapper.find('div').length).toBe(1);
});

it('correctly sets the isFilled prop of the star for the rating number', () => {
  const wrapper = shallow(<RatingDisplay {...reqProps} />);

  const stars = wrapper.find(Star);
  expect(stars.at(0).props().isFilled).toBe(true);
  expect(stars.at(1).props().isFilled).toBe(true);
  expect(stars.at(2).props().isFilled).toBe(false);
  expect(stars.at(3).props().isFilled).toBe(false);
});

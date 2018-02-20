import React from 'react';
import { shallow } from 'enzyme';

import MoviesLayout from '../../../src/components/partials/MoviesLayout';

const MOVIES = [{
  id: 1,
  title: "'71",
  rating: 2,
  releaseDate: "1999-02-09T07:52:02Z",
  trailerYoutubeId: "fAn8HVDj57U",
  posterUrl: "https://www.movieposter.com/posters/archive/main/15/b70-7814"
},
{
  id: 2,
  title: "Respiro",
  rating: 2,
  releaseDate: "2015-04-12T14:15:09Z",
  trailerYoutubeId: "hIuJj_hstUc",
  posterUrl: "https://www.movieposter.com/posters/archive/main/13/A70-6912"
},
{
  id: 3,
  title: "Bomb It,",
  rating: 3,
  releaseDate: "1992-08-15T16:44:11Z",
  trailerYoutubeId: "SltlF6c9Fko",
  posterUrl: "https://www.movieposter.com/posters/archive/main/13/MPW-6725"
}];

it('renders without crashing', () => {
  const wrapper = shallow(<MoviesLayout />);
  expect(wrapper.find('div').length).toBe(1);
});

it('renders all the passed in movies', () => {
  const wrapper = shallow(<MoviesLayout movies={MOVIES} />);

  expect(wrapper.find('.spec-movie').length).toBe(MOVIES.length);
});

it('links to the movie page', () => {
  const IDX = 0;
  const wrapper = shallow(<MoviesLayout movies={MOVIES} />);

  const movieDom = wrapper.find('.spec-movie').at(IDX);

  expect(movieDom).toHaveTagName('Link');
  expect(movieDom.props().to).toBe(`/movies/${MOVIES[IDX].id}`);
});

it('displays the movie poster url, the title, and the rating', () => {
  const IDX = 1;
  const wrapper = shallow(<MoviesLayout movies={MOVIES} />);

  const movieData = MOVIES[IDX];
  const movieDom = wrapper.find('.spec-movie').at(IDX);

  expect(movieDom.find('.spec-poster').props().src).toBe(movieData.posterUrl);
  expect(movieDom.find('.spec-title').text()).toBe(movieData.title);
  expect(movieDom.find('.spec-rating-display').props().rating).toBe(movieData.rating);
});

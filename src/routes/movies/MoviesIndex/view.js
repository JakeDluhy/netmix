// @flow
import React from 'react';

import MoviesLayout from '../../../components/partials/MoviesLayout';

import type { Movie } from '../../../../flow/movie-types';

type Props = {
  movies: array<Movie>
};

export default (props: Props) => (
  <MoviesLayout movies={props.movies} />
);

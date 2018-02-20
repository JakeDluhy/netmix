// @flow
import React from 'react';
import { Link } from 'react-router-dom';

import RatingDisplay from './RatingDisplay';

import type { Movie } from '../../../flow/movie-types';

type Props = {
  movies: array<Movie>,
};

export default (props: Props) => {
  return (
    <div className='flex flex-wrap'>
      {props.movies.map((movie) => (
        <Link
          key={movie.id}
          className='block w-1/2 md:w-1/4 p-4 flex flex-col justify-between
            no-underline hover:bg-grey-light cursor-pointer'
          to={`/movies/${movie.id}`}
        >
          <img src={movie.posterUrl} alt={movie.title} className='mb-2' />

          <div className='no-underline'>
            <div className='text-lg text-grey-darkest font-bold'>{movie.title}</div>

            <RatingDisplay rating={movie.rating} starSize={{ all: 4 }} />

            <div className='text-sm font-medium text-grey-darkest'>
              Released {new Date(movie.releaseDate).toLocaleDateString()}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

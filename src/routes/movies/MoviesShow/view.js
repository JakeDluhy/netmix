// @flow
import React from 'react';

import RatingDisplay from '../../../components/partials/RatingDisplay';
import Close from '../../../components/icons/Close';

import type { Movie } from '../../../../flow/movie-types';

type Props = {
  movie: Movie,
  goBack: func,
};

export default (props: Props) => {
  const releaseDate = new Date(props.movie.releaseDate)
  .toLocaleDateString('en-us', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  return [
    <div key='A' className='flex justify-between items-center'>
      <div>
        <h2 className='text-xl md:text-4xl font-medium'>{props.movie.title}</h2>

        <RatingDisplay rating={props.movie.rating} starSize={{ all: 4, md: 8 }} />
      </div>

      <div
        className='block rounded-full h-8 md:h-12 w-8 md:w-12 p8 cursor-pointer hover:bg-grey-light'
        onClick={props.goBack}
      >
        <Close />
      </div>
    </div>,

    <div key='B' className='pt-4 flex flex-col md:flex-row'>
      <div className='sm:w-full md:w-1/4 pb-8 md:pr-8'>
        <img className='block mx-auto' src={props.movie.posterUrl} alt={props.movie.title} />

        <div className='text-center text-sm font-bold text-grey-darkest'>Released on {releaseDate}</div>
      </div>

      <div className='sm:w-full md:w-3/4 md:pl-8'>
        <div className='relative' style={{ paddingBottom: '56.24%', height: 0 }}>
          <iframe
            className='absolute pin-t pin-l w-full h-full'
            title={props.movie.title}
            src={`https://www.youtube.com/embed/${props.movie.trailerYoutubeId}`}
            frameBorder="0"
            allowFullScreen
          >
          </iframe>
        </div>
      </div>
    </div>
  ];
};

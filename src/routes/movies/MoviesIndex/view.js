// @flow
import React, { Component } from 'react';
import Dropdown from 'react-dropdown';
import _ from 'lodash';

import MoviesLayout from '../../../components/partials/MoviesLayout';

import type { Movie } from '../../../../flow/movie-types';
import type { DropdownObject } from '../../../../flow/vendor-types';

const DROPDOWN_OPTIONS = [
  { label: 'Rating - Best First', value: 'rating:desc' },
  { label: 'Rating - Worst First', value: 'rating:asc' },
  { label: 'Alphabetical - "A" First', value: 'title:asc' },
  { label: 'Alphabetical - "Z" First', value: 'title:desc' },
  { label: 'Release Date - Latest', value: 'releaseDate:desc' },
  { label: 'Release Date - Oldest', value: 'releaseDate:asc' },
];

type Props = {
  movies: Array<Movie>,
  loadSortedMovies: Function,
};

type State = {
  sort?: string,
  order?: string,
  dropdownObj?: DropdownObject,
};

export default class MoviesIndex extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  setSortOption(dropdownObj: DropdownObject) {
    const [sort, order] = dropdownObj.value.split(':');

    this.setState({ sort, order, dropdownObj });
    this.props.loadSortedMovies(sort, order);
  }

  render() {
    const { sort, order } = this.state;
    const { movies } = this.props;

    const sortedMovies = sort ? _.orderBy(movies, [sort], [order]) : movies;

    return [
      <div key='A' className='flex flex-col md:flex-row justify-between items-center mb-4'>
        <h2 className='text-4xl font-medium pb-4 md:pb-0'>All Movies</h2>

        <div className='min-w-64 w-full md:w-auto'>
          <Dropdown
            options={DROPDOWN_OPTIONS}
            value={this.state.dropdownObj}
            placeholder='Sort Movies'
            onChange={this.setSortOption.bind(this)}
          />
        </div>
      </div>,

      <MoviesLayout key='B' movies={sortedMovies} />,
    ];
  }
}

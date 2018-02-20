// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import build from 'redux-object';
import _ from 'lodash';

import { fetchMoviesReq } from '../../../actions';

import MoviesIndex from './view';

const mapStateToProps = ({ entities }) => ({
  movies: build(entities, 'movies') || [],
});

const mapDispatchToProps = (d) => bindActionCreators({ fetchMoviesReq }, d);

const PAGE_SIZE = 8;
const PAGE_BOTTOM_THRESHOLD = 100;

type Props = {
  fetchMoviesReq: func,
};

/**
 * This route implements a semi-naive version of infinite scrolling. It is naive because
 * it wouldn't big up on new updates if they were added later (not suitable for a feed, for
 * instance)
 */
class MoviesIndexRoute extends Component<Props> {
  constructor(props) {
    super(props);

    // Initialize the state for the first page, assuming that content has not ended
    this.state = { pageNumber: 1, isAtEnd: false };
  }

  componentDidMount() {
    // Initially load a page on load
    this.loadPage();

    // Bind the scroll handler, making sure that the listener is throttled
    this.onScrollHandler = _.throttle(this.onScroll.bind(this), 300);
    window.addEventListener('scroll', this.onScrollHandler);
  }

  componentWillReceiveProps(props) {
    // If the updated number of movies is equal to the current number of movies, we know the
    // last request returned nothing
    if(this.props.movies.length === props.movies.length) this.setState({ isAtEnd: true });
  }

  componentWillUnmount() {
    // Remove the scroll listener on unmount
    window.removeEventListener('scroll', this.onScrollHandler);
  }

  onScroll() {
    // innerHeight + pageOffset is the height of the screen. Adding PAGE_BOTTOM_THRESHOLD gives us
    // the chance to trigger the request in advance
    const screenBottomLoc = (window.innerHeight + window.pageYOffset + PAGE_BOTTOM_THRESHOLD);
    if(screenBottomLoc >= document.body.offsetHeight) this.loadPage();
  }

  loadPage() {
    // Don't do anything if the last request didn't give us anything
    if(this.state.isAtEnd) return;

    // Use the internal state for page number, and always load 8 new items
    const query = `?_page=${this.state.pageNumber}&_limit=${PAGE_SIZE}`;

    // We can pass the query string to the action, which will make the fetch request
    this.props.fetchMoviesReq({ query });
    // Increase the page number
    this.setState(({ pageNumber }) => ({ pageNumber: pageNumber + 1 }));
  }

  loadSortedMovies(sort, order) {
    // Reset the pageNumber to 1
    this.setState({ pageNumber: 1 });

    // With a new sort selection, reset to the first page
    const query = `?_page=1&_limit=${PAGE_SIZE}&_sort=${sort}&_order=${order}`;

    this.props.fetchMoviesReq({ query });
  }

  render() {
    const passedProps = _.omit(this.props, 'fetchMoviesReq');
    return <MoviesIndex {...passedProps} loadSortedMovies={this.loadSortedMovies.bind(this)} />
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesIndexRoute);

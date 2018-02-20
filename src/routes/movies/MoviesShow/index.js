// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { goBack } from 'react-router-redux';
import _ from 'lodash';

import { buildObj } from '../../../utils/entities-helpers';

import { findMovieReq } from '../../../actions';

import MoviesShow from './view';

const mapStateToProps = ({ entities }, { match }) => ({
  movieId: match.params.id,
  movie:   buildObj(entities, 'movies', match.params.id),
});

const mapDispatchToProps = (d) => bindActionCreators({ findMovieReq, goBack }, d);

type Props = {
  movieId: number,
  findMovieReq: Function,
};

class MoviesShowRoute extends Component<Props> {
  componentDidMount() {
    this.props.findMovieReq({ id: this.props.movieId });
  }

  render() {
    const passedProps = _.omit(this.props, 'findMovieReq');
    return <MoviesShow {...passedProps} />
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesShowRoute);

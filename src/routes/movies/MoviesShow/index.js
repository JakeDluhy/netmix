import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { goBack } from 'react-router-redux';

import MoviesShow from './view';

const mapStateToProps = () => ({
  movie: {
    "id":1,
    "title":"Invasion of the Bee Girls",
    "rating": 2,
    "releaseDate":"1999-02-09T07:52:02Z",
    "trailerYoutubeId":"fAn8HVDj57U",
    "posterUrl":"https://www.movieposter.com/posters/archive/main/15/b70-7814"
  },
});

const mapDispatchToProps = (d) => bindActionCreators({ goBack }, d);

export default connect(mapStateToProps, mapDispatchToProps)(MoviesShow);

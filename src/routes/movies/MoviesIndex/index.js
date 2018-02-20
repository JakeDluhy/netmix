import { connect } from 'react-redux';

import MoviesIndex from './view';

const mapStateToProps = () => ({
  movies: [
    {
      "id":1,
      "title":"'71",
      "rating":2,
      "releaseDate":"1999-02-09T07:52:02Z",
      "trailerYoutubeId":"fAn8HVDj57U",
      "posterUrl":"https://www.movieposter.com/posters/archive/main/15/b70-7814"
    },
    {
      "id":2,
      "title":"Respiro",
      "rating":2,
      "releaseDate":"2015-04-12T14:15:09Z",
      "trailerYoutubeId":"hIuJj_hstUc",
      "posterUrl":"https://www.movieposter.com/posters/archive/main/13/A70-6912"
    },
    {
      "id":3,
      "title":"Bomb It,",
      "rating":3,
      "releaseDate":"1992-08-15T16:44:11Z",
      "trailerYoutubeId":"SltlF6c9Fko",
      "posterUrl":"https://www.movieposter.com/posters/archive/main/13/MPW-6725"
    },
    {
      "id":4,
      "title":"Unholy Three, The",
      "rating":2,
      "releaseDate":"1993-06-13T15:16:32Z",
      "trailerYoutubeId":"tuPlMfsonBw",
      "posterUrl":"https://www.movieposter.com/posters/archive/main/13/MPW-6724"
    },
    {
      "id":5,
      "title":"Invasion of the Bee Girls,",
      "rating":3,
      "releaseDate":"1988-01-02T12:01:22Z",
      "trailerYoutubeId":"nHtyDsoF4IY",
      "posterUrl":"https://www.movieposter.com/posters/archive/main/2/b70-1191"
    },
    {
      "id":6,
      "title":"Tootsie,",
      "rating":3,
      "releaseDate":"2001-09-04T19:27:58Z",
      "trailerYoutubeId":"YiqZcykdaV0",
      "posterUrl":"https://www.movieposter.com/posters/archive/main/37/MPW-18721"
    },
    {
      "id":7,
      "title":"Virgin Territory,",
      "rating":1,
      "releaseDate":"2008-02-25T03:47:31Z",
      "trailerYoutubeId":"vPP6aIw1vgY",
      "posterUrl":"https://www.movieposter.com/posters/archive/main/7/b70-3959"
    },
    {
      "id":8,
      "title":"Doomsday Prophecy,",
      "rating":2,
      "releaseDate":"2013-01-19T16:56:50Z",
      "trailerYoutubeId":"WEZ79CiMYD4",
      "posterUrl":"https://www.movieposter.com/posters/archive/main/38/MPW-19409"
    }
  ],
});

export default connect(mapStateToProps)(MoviesIndex);

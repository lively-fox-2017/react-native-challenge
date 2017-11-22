import axios from 'axios';

function fetchMovieByTitle(title) {
  return (dispatch) => {
    axios.get(`http://www.omdbapi.com/?t=${title}&apikey=d152fbcf`)
    .then(({ data })=>{
      alert(JSON.stringify(data))
      dispatch(setMovieDetail(data))
    })

  }
}

function setMovieDetail(movieDetail={}) {
  console.log(movieDetail);
  alert(JSON.stringify(movieDetail))
  return {
    type: 'SET_MOVIE_DETAIL',
    state: {
      title: movieDetail.hasOwnProperty('Title') ? movieDetail.Title : '',
      year: movieDetail.hasOwnProperty('Year') ? movieDetail.Year : '',
      released: movieDetail.hasOwnProperty('Released') ? movieDetail.Released : '',
      genre: movieDetail.hasOwnProperty('Genre') ? movieDetail.Genre : '',
      director: movieDetail.hasOwnProperty('Director') ? movieDetail.Director : '',
      actors: movieDetail.hasOwnProperty('Actors') ? movieDetail.Actors : '',
      poster: movieDetail.hasOwnProperty('Poster') ? movieDetail.Poster : '',
      imdbRating: movieDetail.hasOwnProperty('imdbRating') ? movieDetail.imdbRating : ''
    }
  };
}

export default {
  fetchMovieByTitle,
  setMovieDetail
}

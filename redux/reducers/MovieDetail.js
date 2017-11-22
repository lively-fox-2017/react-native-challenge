import Actions from '../actions/MovieDetail';

export default (state=[], action) => {
  switch (action.type) {
    case 'FETCH_BY_TITLE':
      return {asd: 'asd'};
    case Actions.setMovieDetail().type:
      return Object.assign({}, state, action.state);
    default:
      return state
  }
}

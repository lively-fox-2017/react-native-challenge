import { openDota } from '../helpers.js';

export const fetchHeroes = (heroes) => {
  return {
    type: 'FETCH_HEROES',
    payload: { heroes }
  };
};

export const requestHeroes = () => {
  return (dispatch) => {
    openDota
      .get('/heroStats')
      .then(({ data }) => {
        dispatch(fetchHeroes(data));
      })
      .catch((err) => {
        console.log('GET /heroStats ERR:', err);
      });
  };
};

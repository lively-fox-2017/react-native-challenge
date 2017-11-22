import axios from 'axios';

export const setRestaurants = restaurants => ({
  type: 'SET_RESTAURANTS',
  payload: { restaurants }
});

export const getRestaurantsFromZomatoApi = (lat, lon) => {
  const URL = `https://developers.zomato.com/api/v2.1/search?lat=${lat}&lon=${lon}`;

  return (dispatch, getState) => {
    axios.get(URL, {headers: {'user-key': '668cf0ff7ba91ccbeafd4ae1c6159916'}})
    .then(resp => {
      const restaurants = resp.data.restaurants.map(restaurant => {
        restaurant = restaurant.restaurant;
        restaurant.featured_image = restaurant.featured_image.replace('?output-format=webp', '');
        return restaurant;
      });

      dispatch(setRestaurants(restaurants));
    })
    .catch(err => {
      throw err;
    });
  }
};
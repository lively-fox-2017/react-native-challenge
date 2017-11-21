import React from 'react';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './screens/Home';
import RestaurantScreen from './screens/Restaurant';

const RootNavigator = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerTitle: 'Restaurants Near You'
    }
  },
  Restaurant: {
    screen: RestaurantScreen,
    navigationOptions: ({ navigation }) => ({
      headerTitle: `${navigation.state.params.restaurant.name}`
    })
  }
});

export default RootNavigator;

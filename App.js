import React from 'react';
import {
  StackNavigator
} from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';

const Navigator = StackNavigator({
  Home: { screen: HomeScreen },
  Details: { screen: DetailsScreen }
});

export default Navigator;

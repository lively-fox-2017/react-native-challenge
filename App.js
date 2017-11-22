import React from 'react';

import { StackNavigator } from 'react-navigation'

import articleListScreen from './src/articleList'
import articleScreen from './src/article'

const AppNav = StackNavigator({
  Home: {
    screen: articleListScreen,
    navigationOptions: {
      headerTitle: 'Home'
    }
  },

  Article: {
    screen: articleScreen,
    navigationOptions: {
      headerTitle: 'Article',
      headerBackTitle: 'Back'
    }
  }
}, {
  initialRouteName: 'Home'
})

export default AppNav;

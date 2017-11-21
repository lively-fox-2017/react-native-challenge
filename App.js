import React from 'react'
import { StackNavigator } from 'react-navigation'

import News from './components/News'
import NewsDetails from './components/NewsDetails'
import Home from './components/Home'

const RootNavigator = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      headerTitle: 'US News Agregator'
    }
  },
  News: {
    screen: News,
    navigationOptions: {
      headerTitle: 'News'
    }
  },
  NewsDetails: {
    screen: NewsDetails,
    navigationOptions: {
      headerTitle: 'NewsDetails'
    }
  }
})

export default RootNavigator

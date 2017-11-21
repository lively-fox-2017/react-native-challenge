import React from 'react'
import { StackNavigator } from 'react-navigation'

import HomeScreen from './components/Home'

const RootNavigator = StackNavigator({
  Home: {
    screen: HomeScreen,
  }
})

export default RootNavigator

import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import ListContent from '../components/ListContent'
import MainContent from '../components/MainContent'
import ReduxListContent from '../components/ReduxListContent'
import ReduxMainContent from '../components/ReduxMainContent'

const RootNavigator = StackNavigator({
  home: {
    screen: ListContent,
    navigationOptions: {
      headerTitle: 'List',
    }
  },
  Main: {
    screen: MainContent,
    navigationOptions: {
      headerTitle: 'Content'
    }
  },
  ReduxReact: {
    screen: ReduxListContent,
    navigationOptions: {
      headerTitle: 'React-redux news Area'
    }
  },
  ReduxMainContent: {
    screen: ReduxMainContent,
    navigationOptions: {
      headerTitle: 'React-redux Main Content'
    }
  }
})

export default RootNavigator

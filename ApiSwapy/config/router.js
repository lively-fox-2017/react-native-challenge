import React, {Component} from 'react';
import {
  AppRegistry,
} from 'react-native'
import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import ListApi from '../components/ListApi';
import DataHeroes from '../components/DataHeroes';

export const Tabs = StackNavigator({
  ListApi: {
    screen: ListApi,
    navigationOptions: {
      headerTitle: 'Home',
    },
  },
  DataHeroes: {
    screen: DataHeroes,
    navigationOptions: {
      headerTitle: 'back to home',
    },
  },
})

AppRegistry.registerComponent('Navigasi', () => Navigasi);

import React, {Component} from 'react';
import {
  AppRegistry,
} from 'react-native'
import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import ListApi from '../components/ListApi';
import ListBerita from '../components/ListBerita';
// ini adalah router
export const Tabs = StackNavigator({
  ListApi: {
    screen: ListApi,
    navigationOptions: {
      headerTitle: 'Home',
    },
  },
  ListBerita: {
    screen: ListBerita,
    navigationOptions: {
      headerTitle: 'back to List berita',
    },
  },
})

AppRegistry.registerComponent('Navigasi', () => Navigasi);

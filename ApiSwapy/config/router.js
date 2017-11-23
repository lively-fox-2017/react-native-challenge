import React, {Component} from 'react';
import {
  AppRegistry,
} from 'react-native'
import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import ListApi from '../components/ListApi';
import ListBerita from '../components/ListBerita';
import ListBeritaRedux from '../components/ListBeritaRedux'
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
      headerTitle: 'back to List Home',
    },
  },
  ListBeritaRedux: {
    screen: ListBeritaRedux,
    navigationOptions: {
      headerTitle: 'back to List Home'
    }
  }
})

AppRegistry.registerComponent('Navigasi', () => Navigasi);

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import { Provider } from 'react-redux'
import {connect} from 'react-redux'
import { history } from './store'
import store from './store/index'

import HomeScreen from './components/Lihat'
import HomeScreendua from './components/Lihatdua'
import KontenRedux from './components/kontenredux'
import HomeScreenRedux from './components/homescreenredux'


const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  Homedua: { screen: HomeScreendua },
  KontenRedux: { screen: KontenRedux },
  HomeScreenRedux: { screen: HomeScreenRedux }
});

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
      <SimpleApp />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

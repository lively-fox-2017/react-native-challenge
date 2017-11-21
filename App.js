import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux'
import Home from './components/home'
import store from './store/store'
import Stack from './config/router'
import { TabNavigator } from 'react-navigation'


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
      <Stack/>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

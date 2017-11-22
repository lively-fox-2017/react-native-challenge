import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './components/Lihat'
import HomeScreendua from './components/Lihatdua'


const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  Homedua: { screen: HomeScreendua }
});

export default class App extends React.Component {
  render() {
    return <SimpleApp />;
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

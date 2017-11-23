import React from 'react';
import { StackNavigator } from 'react-navigation';
import { View, StyleSheet, Button } from 'react-native';
import { Provider } from 'react-redux';
import Home from './components/Home';
import Other from './components/Other';
import MovieDetail from './components/MovieDetail';

import store from './redux/store.js';

const RootNavigator = StackNavigator({
  Home: { screen: Home },
  Other: { screen: Other },
  MovieDetail: { screen: MovieDetail },
});

export default class App extends React.Component{
  constructor(props) {
    super(props)
  }
  
  render() {
    return (<Provider store={store}><RootNavigator/></Provider>);
  }
};

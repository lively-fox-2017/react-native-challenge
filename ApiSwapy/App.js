import React from 'react';
import { AppRegistry, View, Text, ScrollView } from 'react-native';
import { Provider } from 'react-redux'
import store from './store'

import { Tabs } from './config/router'
import ListApi from './components/ListApi'

export default class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <Tabs />
      </Provider>
    );
  }
}

import React from 'react';
import { AppRegistry, View, Text, ScrollView } from 'react-native';
import { Tabs } from './config/router'

import ListApi from './components/ListApi'

export default class App extends React.Component {

  render() {
    return <Tabs />;
  }
}

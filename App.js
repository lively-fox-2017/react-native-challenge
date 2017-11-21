import React from 'react';
import { StackNavigator } from 'react-navigation';
import { View, StyleSheet, Button } from 'react-native';
import Home from './components/Home';
import Other from './components/Other';

const RootNavigator = StackNavigator({
  Home: { screen: Home },
  Other: { screen: Other },
});

import { Font } from 'expo';
// import FontAwesome, { Icons } from 'react-native-fontawesome';
// import FontAwesome, {Icons} from 'react-native-fontawesome';
// import Icon from 'react-native-vector-icons/FontAwesome';

class App extends React.Component {
  constructor(props) {
    super(props)
  }


  // async componentWillMount() {
  //   await Font.loadAsync({
  //     'FontAwesome': require('./assets/fonts/FontAwesome.otf'),
  //   });
  //
  //   this.setState({ fontLoaded: true });
  // }

  render() {
    console.log('App');
    return (
      <View >
        <Home/>
      </View>
    );
  }
}

export default RootNavigator;

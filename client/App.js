import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux'
import store from './store'
import HomeScreen from './components/HomeScreen'

export default class App extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     isReady: false
  //   };
  // }


  render() {
    return (
      <Provider store={store}>
      <View style={styles.container}>
        <Text>React-challange-native</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <HomeScreen></HomeScreen>
      </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginLeft: 5,
    marginRight: 5,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

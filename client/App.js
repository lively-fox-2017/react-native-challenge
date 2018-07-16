import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  Button
 } from 'react-native';

export default class App extends React.Component {

  componentWillMount () {

  }

  render() {
    return (
      <View style={styles.container}>
        <Text>BODO</Text>
        <Text>AMAT</Text>
        <Text>GA</Text>
        <Text>MAU</Text>
        <Text>TAU</Text>
        <Text>!</Text>
      </View>
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

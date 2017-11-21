import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ListApi from './components/ListApi'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ListApi />
        <Text>Open up App.js to start working  eason your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phon 12233 e to open the developer menu.</Text>
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

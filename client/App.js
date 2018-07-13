import React from 'react';
import { Provider } from 'react-redux'
import {StyleSheet} from 'react-native'
import store from './store'
import RouterApp from './RouterApp'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RouterApp/>
        {/* <View style={styles.container}>
          <Text>React-challange-native</Text>
          <Text>Changes you make will automatically reload.</Text>
          <Text>Shake your phone to open the developer menu.</Text>
          <HomeScreen></HomeScreen>
        </View> */}
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

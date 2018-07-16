import React from 'react';
import AllFetchData from './components/allData';
import DetailZomato from './components/DetailZomato'
import { Provider } from 'react-redux'
import store from './store/store'
import { StyleSheet, Text, View, AppRegistry } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';

const BasicApp = StackNavigator({
  Home: { screen: AllFetchData },
  Test: { screen: DetailZomato}
});


class App extends React.Component {

  componentWIllMount () {
    
  }

  render() {
    return (
      <Provider store={store}>
          <BasicApp></BasicApp>
      </Provider>
    )
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
// AppRegistry.registerComponent('Navigasi', ()=> Navigasi)

export default App;
import React from 'react';
import axios from 'axios';
import AllFetchData from './components/allData';
import { Provider } from 'react-redux'
import store from './store/store'
import { StyleSheet, Text, View } from 'react-native';

class App extends React.Component {

  componentWIllMount () {
    
  }

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
            <Text>ZOMATO FETCH ON TESTING !</Text>
            <AllFetchData></AllFetchData>
        </View>
      </Provider>
    )
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


export default App;

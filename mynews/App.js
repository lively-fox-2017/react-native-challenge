import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import ArticleItem from './ArticleItem'
import ArticleList from './ArticleList'

import store from './store'
import { loadNews } from './actions/NewsAction'
import { Provider } from 'react-redux'

class App extends Component {

  render() {

    return (
      <Provider store={store}>
      <AppNav/>
      </Provider>
    )
  }
}

const AppNav = StackNavigator({
  Home: {
    screen: ArticleList,
    navigationOptions: {
      headerTitle: 'Home',
    },
  },
  Detail: {
    screen: ArticleItem ,
    navigationOptions: {
      headerTitle: 'Detail',
    }
  },
});



export default App

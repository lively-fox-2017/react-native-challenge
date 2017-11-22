import React from 'react';
import { Provider } from 'react-redux'
import { StackNavigator } from 'react-navigation'

import store from './src/store'
import articleListScreen from './src/articleList'
import articleScreen from './src/article'
import articleListReduxScreen from './src/articleListRedux'

class App extends React.Component{
  render() {
    return (
      <Provider store={ store }>
        <AppNav />
      </Provider>
    )
  }
}

const AppNav = StackNavigator({
  Home: {
    screen: articleListScreen,
    navigationOptions: {
      headerTitle: 'Home'
    }
  },

  Article: {
    screen: articleScreen,
    navigationOptions: {
      headerTitle: 'Article',
      headerBackTitle: 'Back'
    }
  },

  HomeRedux: {
    screen: articleListReduxScreen,
    navigationOptions: {
      headerTitle: 'Home Redux'
    }
  }
}, {
  initialRouteName: 'HomeRedux'
})

export default App;

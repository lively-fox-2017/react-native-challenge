import React from 'react'
import { Provider } from 'react-redux'

import store from './src/store'
import AppNavigator from './src/routes/'

export default class App extends React.Component {
  constructor () {
    super()
  }

  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    )
  }
}

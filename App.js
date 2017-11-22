import React from 'react'
import { Provider } from 'react-redux'
import store from './store'

import Navigator from './navigators'

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <Navigator/>
      </Provider>
    )
  }
}

export default App

import React from 'react';
import Navigation from './helpers/Navigation'
import store from './store/index'
import { Provider } from 'react-redux'

export default class App extends React.Component {
  constructor () {
    super()
    }

  render() {
    return (
    <Provider  store={ store }><Navigation /></Provider>
    )
  }
}

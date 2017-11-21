import React from 'react';
// import MainContent from './components/MainContent'
// import ListContent from './components/ListContent'
import Navigation from './helpers/Navigation'
export default class App extends React.Component {
  constructor () {
    super()
    }

  render() {
    return (
    <Navigation />
      // <MainContent />
      // <ListContent />
    )
  }
}

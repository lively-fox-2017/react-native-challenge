import React from 'react'
import { StackNavigator, addNavigationHelpers } from 'react-navigation'
import { connect } from 'react-redux'

import News from '../components/News'
import NewsDetails from '../components/NewsDetails'
import Home from '../components/Home'

export const RootNavigator = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      headerTitle: 'US News Agregator'
    }
  },
  News: {
    screen: News,
    navigationOptions: {
      headerTitle: 'News'
    }
  },
  NewsDetails: {
    screen: NewsDetails,
    navigationOptions: {
      headerTitle: 'NewsDetails'
    }
  }
})

const Navigator = ({ dispatch, nav }) => (
  <RootNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

const mapStateToProps = (state) => ({
  nav: state.nav
})

export default connect(mapStateToProps, null)(RootNavigator)

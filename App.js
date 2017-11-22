import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import axios from 'axios'

import FeedComponent from './src/components/FeedComponent'
import HeaderComponent from './src/components/HeaderComponent'

export default class App extends React.Component {
  constructor () {
    super()

    this.state = {
      tweets: []
    }

    this.fetchTrendingTweet()
  }

  fetchTrendingTweet () {
    axios.get('https://us-central1-gcp-learn-184002.cloudfunctions.net/Hello_Function/?action=trending_tweet')
      .then(({data}) => this.setState({
        tweets: data.statuses
      }))
      .catch(reason => reason)
  }

  generateFeed () {
    return (
      this.state.tweets.map(tweet => {
        return <FeedComponent tweet={tweet.text} key={tweet.id} account={tweet.user.screen_name} name={tweet.user.name} avatar={tweet.user.profile_image_url.substring(0, tweet.user.profile_image_url.indexOf('normal.jpg')) + 'bigger.jpg'}  />
      })
    )
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <HeaderComponent />
        {this.generateFeed()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    backgroundColor: '#fff'
  }
});

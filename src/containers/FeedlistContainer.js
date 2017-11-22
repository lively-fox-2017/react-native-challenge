import React, { Component } from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import { connect } from 'react-redux'

import { fetchTrendingTweets } from '../actions/TweetActions'
import FeedComponent from '../components/FeedComponent'
import HeaderComponent from '../components/HeaderComponent'

class FeedListContainer extends Component {

  constructor(props) {
    super(props)

    props.fetchTrendingTweets(props.navigation.state.query)
  }

  generateFeed () {
    return (
      this.props.tweets.map(tweet => {
        return <FeedComponent tweet={tweet.text} key={tweet.id} account={tweet.user.screen_name} name={tweet.user.name} avatar={tweet.user.profile_image_url.substring(0, tweet.user.profile_image_url.lastIndexOf('_')) + '_bigger' + tweet.user.profile_image_url.substring(tweet.user.profile_image_url.lastIndexOf('.'))}  />
      })
    )
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <HeaderComponent navigation={this.props.navigation} title={this.props.navigation.state.name} />
        {this.generateFeed()}
      </ScrollView>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})

const mapStateToProps = (state) => ({
  tweets: state.TweetReducer.tweets
});

const mapDispatchToProps = (dispatch) => ({
  fetchTrendingTweets: (query) => dispatch(fetchTrendingTweets(query))
});

export default connect(mapStateToProps, mapDispatchToProps)(FeedListContainer);
// export default FeedListContainer

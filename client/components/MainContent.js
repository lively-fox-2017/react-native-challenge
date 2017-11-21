import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  ScrollView
} from 'react-native'

import axios from 'axios'

export default class MainContent extends Component {
  constructor () {
    super()
    this.state = {
      news: []
    }
  }
  componentDidMount () {
    const url = 'https://newsapi.org/v2/everything?domains=wsj.com&apiKey=e339ce0c756d41b4b750a34a5f778ccf'
    axios.get(url)
    .then(respond => {
      this.setState({
        news: respond.data
      })
    })
    .catch(err => {
      console.log(err)
    })
  }

  render() {
    return (
      <ScrollView styles={styles.contentContainer}>
        { this.state.news.length == 0 ?
            <Text>Loading ....</Text> :
            this.state.news.articles.map((data, i) => {
              return <Text key={i}>{ data.description }</Text>
            })
        }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

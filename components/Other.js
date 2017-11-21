import React, { Component } from 'react';
import { Text, FlatList, View, StyleSheet } from 'react-native';
import axios from 'axios';

export default class Other extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quote: '',
      from: '',
      fontLoaded: true,
      quotes: [],
    }
  }

  componentDidMount() {
    axios.get('https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies&count=10', {
      headers: {
        'X-Mashape-Key': '7VaCOmrLEGmshuGxFXwic6fjZg7op16wRA8jsn1DCWfvv0ZDX4',
        'Accept': 'application/json',
      }
    })
    .then(({data}) => {
      this.setState({
        quotes: data.map((quoteDetail) => {return {quote: quoteDetail.quote, from: quoteDetail.author, key: (Math.random()*100)}}),
      })
    })
  }

  render() {
    return (
      <View>
      <FlatList
        data={this.state.quotes}
        renderItem={({item}) => (<View style={styles.quoteContainer}><Text style={styles.quote}>{item.quote}</Text><Text>-{item.from}-</Text></View>)}
      />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  quote: {
    fontSize: 20,
  },
  quoteContainer: {
     borderRadius: 4, borderWidth: 0.5, borderColor: '#d6d7da',
  }
})

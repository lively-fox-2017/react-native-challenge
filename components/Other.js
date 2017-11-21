import React, { Component } from 'react';
import { Text } from 'react-native';
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
        quotes: data,
      })
    })
  }

  render() {
    return (
      <Text>
        {JSON.stringify(this.state.quotes)}
      </Text>
    )
  }
}
